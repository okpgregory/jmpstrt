import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Input } from "./input";
import FormLabel from "../shared/FormLabel";

interface MyFile extends File {
  preview?: string;
}

interface DropzoneProps {
  file: MyFile | null;
  setFile: React.Dispatch<React.SetStateAction<MyFile | null>>;
  isImageIncluded?: boolean;
}

const Dropzone = ({ isImageIncluded, file, setFile }: DropzoneProps) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (!isImageIncluded && acceptedFiles[0].type === "image/jpeg") return;
      // Do something with the files
      setFile(
        isImageIncluded
          ? Object.assign(acceptedFiles[0], {
              preview: URL.createObjectURL(acceptedFiles[0]),
            })
          : acceptedFiles[0]
      );
    },
    [isImageIncluded, setFile]
  );
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"], "image/jpeg": [".jpg", ".jpeg"] },
    maxFiles: 1,
    maxSize: 1024 * 1000,
  });

  return (
    <div {...getRootProps()}>
      <Input
        {...getInputProps({
          id: "file",
        })}
      />
      <FormLabel text="Registration Document" htmlFor="file" />
      <div className="w-full py-4 px-6 rounded-xl h-[137px] min-w-[445px] mt-[6px] bg-white border border-gray-border flex flex-col items-center justify-center">
        {!file ? (
          <div className="flex flex-col items-center justify-center gap-4">
            <img src="/svgs/file.svg" alt="file" />
            <div className="flex flex-col items-center gap-2 text-sm">
              <p className="leading-[19.6px]">
                <span className="text-blue-1">Click to upload</span> or drag and
                drop
              </p>
              <p className="leading-[19.6px]">.pdf (max. 1MB)</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-1">
            {isImageIncluded && (
              <img
                src={file.preview}
                alt="file preview"
                className="h-4 w-4 object-contain"
              />
            )}
            <p className="text-sm text-gray-1">{file.name}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropzone;
