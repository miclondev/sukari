"use client";

import { Card } from "@/components/ui/card";
import { FileUploader } from "@aws-amplify/ui-react-storage";
import "@aws-amplify/ui-react/styles.css";
import { ImageIcon } from "lucide-react";
import { v4 as uuidV4 } from "uuid";
import { ImagePreview } from "./image-preview";

interface ImagesSectionProps {
  selectedImages: string[];
  setSelectedImages: React.Dispatch<React.SetStateAction<string[]>>;
}

export function ImagesSection({ selectedImages, setSelectedImages }: ImagesSectionProps) {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        {selectedImages.length === 0 && (
          <div className="border-2 border-dashed rounded-lg p-8 text-center">
            <ImageIcon className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Drag and drop images here or click to upload</p>
          </div>
        )}

        <div className="grid grid-cols-3 gap-4">
          {selectedImages.map((fileKey, index) => (
            <ImagePreview
              key={index}
              fileKey={fileKey}
              onRemove={() => {
                setSelectedImages((prev) => prev.filter((url) => url !== fileKey));
              }}
            />
          ))}
        </div>

        <FileUploader
          acceptedFileTypes={["image/*"]}
          path={`tour/`}
          maxFileCount={1}
          isResumable
          onUploadSuccess={async (event) => {
            if (!event?.key) return;
            setSelectedImages((prev) => [...prev, event.key as string]);
          }}
          processFile={(params) => {
            const fileExt = params.file?.name.split(".").pop();
            return {
              ...params,
              key: `${uuidV4()}.${fileExt}`,
            };
          }}
          onFileRemove={({ key }) => {
            setSelectedImages((prev) => prev.filter((url) => url !== key));
          }}
        />
      </div>
    </Card>
  );
}
