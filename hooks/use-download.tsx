"use client";

import { downloadData, getUrl } from "aws-amplify/storage";
import { useState } from "react";
import { toast } from "sonner";

export function useDownloadFile() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);

  const getFileUrl = async (path: string | undefined) => {
    if (!path) {
      toast.error("File path not found");
      return;
    }

    const res = await getUrl({
      path,
      options: {
        validateObjectExistence: false,
        expiresIn: 3600,
      },
    });
    return res?.url?.toString();
  };

  const handleDownload = async (path: string | undefined) => {
    if (!path) {
      toast.error("File path not found");
      return;
    }

    try {
      setIsDownloading(true);
      setProgress(0);

      const { body } = await downloadData({
        path,
        options: {
          onProgress: ({ transferredBytes, totalBytes }) => {
            if (totalBytes) {
              const percentage = (transferredBytes / totalBytes) * 100;
              setProgress(Math.round(percentage));
            }
          },
        },
      }).result;

      // Get the file as a blob
      const blob = await body.blob();

      // Create and trigger download
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = path.split("/").pop() || "download"; // Get filename from path
      document.body.appendChild(a);
      a.click();

      // Cleanup
      URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Download error:", error);
      toast.error("Failed to download file");
    } finally {
      setIsDownloading(false);
      setProgress(0);
    }
  };

  return { getFileUrl, isDownloading, handleDownload, progress };
}
