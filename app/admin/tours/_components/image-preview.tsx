"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useDownloadFile } from "@/hooks/use-download";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface ImagePreviewProps {
  fileKey: string;
  onRemove: () => void;
}

export function ImagePreview({ fileKey, onRemove }: ImagePreviewProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const { getFileUrl } = useDownloadFile();

  useEffect(() => {
    const fetchVideo = async () => {
      if (!fileKey) return;
      const url = await getFileUrl(fileKey);
      if (!url) return;
      setImageUrl(url);
    };
    fetchVideo();
  }, [fileKey]);

  return (
    <>
      <div className="relative group">
        <div className="aspect-video w-48 rounded-lg overflow-hidden">
          <img
            src={imageUrl || ""}
            alt="Tour preview"
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => setSelectedImage(imageUrl)}
          />
        </div>
        <button
          type="button"
          onClick={onRemove}
          className="absolute -top-2 -left-2 w-6 h-6 bg-white border-2 rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          <div className="aspect-video w-full">
            <img src={imageUrl || ""} alt="Tour preview" className="w-full h-full object-contain" />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
