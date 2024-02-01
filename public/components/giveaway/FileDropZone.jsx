'use client'
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const FileDropZone = ({ onFileChange }) => {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      onFileChange(file);
    }
  }, [onFileChange]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      style={{
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer',
      }}
      className='dropzone'
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Aqui</p>
      ) : (
        <p>Tira aquí el archivo .csv</p>
      )}
    </div>
  );
};

export default FileDropZone;
