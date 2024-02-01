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
        border: '2px dashed #ddd',
        borderRadius: '4px',
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer',
        background: isDragActive ? '#eee' : '#fff',
      }}
      className='dropzone'
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>AQUIIiii CHUGCHA</p>
      ) : (
        <p>Tira aqui el archivo .csv</p>
      )}
    </div>
  );
};

export default FileDropZone;
