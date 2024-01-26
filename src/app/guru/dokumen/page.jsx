"use client";
import React from "react";
import useDownloader from "react-use-downloader";

export default function App() {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const fileUrl = "/teguran1.pdf"
  const filename = "Format Surat Peringatan dan Teguran-1.pdf";

  const fileUrl2 = "/teguran2.pdf"
  const filename2 = "Format Surat Peringatan dan Teguran-2.pdf";
  
  const fileUrl3 = "/teguran3.pdf"
  const filename3 = "Format Surat Peringatan dan Teguran-3.pdf";

  return (
    <div className="grid grid-cols-3 h-[90vh] items-center">
      <div className="max-w-md mx-auto p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">
          Format Surat Peringatan dan Teguran-1
        </h1>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          quia veniam alias? Consequatur doloribus perferendis itaque quasi,
          minima repellendus. Itaque reprehenderit vel aperiam ratione dolorum?
        </p>
        <div className="mb-4">
          <div
            className="bg-blue-500 h-4 rounded"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        <ul className="list-disc pl-4">
          <li>
            <p className="mb-2">
              size: <b>{size} bytes</b>
            </p>
          </li>
          <li>
            <p className="mb-2">
              elapsed: <b>{elapsed}s</b>
            </p>
          </li>
          <li>
            <p className="mb-2">
              percentage: <b>{percentage}%</b>
            </p>
          </li>
        </ul>

        <div className="flex justify-end mt-4">
          <button
            className={`inline-flex items-center px-4 py-2 ${
              isInProgress ? "bg-gray-500" : "bg-blue-500"
            } text-white font-bold rounded`}
            disabled={isInProgress}
            onClick={() => download(fileUrl, filename)}
          >
            Download file
          </button>
          <button
            className="inline-flex items-center px-4 py-2 bg-blue-500 text-white font-bold rounded disabled:opacity-50 ml-2"
            disabled={!isInProgress}
            onClick={() => cancel()}
          >
            Cancel the download
          </button>
        </div>
      </div>

      <div className="max-w-md mx-auto p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">
          Format Surat Peringatan dan Teguran-2
        </h1>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          quia veniam alias? Consequatur doloribus perferendis itaque quasi,
          minima repellendus. Itaque reprehenderit vel aperiam ratione dolorum?
        </p>
        <div className="mb-4">
          <div
            className="bg-blue-500 h-4 rounded"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        <ul className="list-disc pl-4">
          <li>
            <p className="mb-2">
              size: <b>{size} bytes</b>
            </p>
          </li>
          <li>
            <p className="mb-2">
              elapsed: <b>{elapsed}s</b>
            </p>
          </li>
          <li>
            <p className="mb-2">
              percentage: <b>{percentage}%</b>
            </p>
          </li>

        </ul>

        <div className="flex justify-end mt-4">
          <button
            className={`inline-flex items-center px-4 py-2 ${
              isInProgress ? "bg-gray-500" : "bg-blue-500"
            } text-white font-bold rounded`}
            disabled={isInProgress}            onClick={() => download(fileUrl2, filename2)}
          >
            Download file
          </button>
          <button
            className="inline-flex items-center px-4 py-2 bg-blue-500 text-white font-bold rounded disabled:opacity-50 ml-2"
            disabled={!isInProgress}
            onClick={() => cancel()}
          >
            Cancel the download
          </button>
        </div>
      </div>
      <div className="max-w-md mx-auto p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">
          Format Surat Peringatan dan Teguran-3
        </h1>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          quia veniam alias? Consequatur doloribus perferendis itaque quasi,
          minima repellendus. Itaque reprehenderit vel aperiam ratione dolorum?
        </p>
        <div className="mb-4">
          <div
            className="bg-blue-500 h-4 rounded"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        <ul className="list-disc pl-4">
          <li>
            <p className="mb-2">
              size: <b>{size} bytes</b>
            </p>
          </li>
          <li>
            <p className="mb-2">
              elapsed: <b>{elapsed}s</b>
            </p>
          </li>
          <li>
            <p className="mb-2">
              percentage: <b>{percentage}%</b>
            </p>
          </li>

        </ul>

        <div className="flex justify-end mt-4">
          <button
            className={`inline-flex items-center px-4 py-2 ${
              isInProgress ? "bg-gray-500" : "bg-blue-500"
            } text-white font-bold rounded`}
            disabled={isInProgress}
            onClick={() => download(fileUrl3, filename3)}
          >
            Download file
          </button>
          <button
            className="inline-flex items-center px-4 py-2 bg-blue-500 text-white font-bold rounded disabled:opacity-50 ml-2"
            disabled={!isInProgress}
            onClick={() => cancel()}
          >            Cancel the download
          </button>
        </div>
      </div>
    </div>
  );
}
