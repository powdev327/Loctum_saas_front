import type React from "react"

interface FileCardProps {
  icon: React.ReactNode
  title: string
  usage: string
  fileCount: number
  storageUsed: string
  iconStyle: string
  fileName?: string
  fileUrl?: string
}

const FileCard: React.FC<FileCardProps> = ({
                                             icon,
                                             title,
                                             usage,
                                             fileCount,
                                             storageUsed,
                                             iconStyle,
                                             fileName,
                                             fileUrl,
                                           }) => {
  return (
      <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${iconStyle}`}>
              {icon}
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                {title}
              </h4>
              {usage && (
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                {usage}
              </span>
              )}
            </div>
          </div>

          <div className="text-right">
          <span className="block text-sm font-medium text-gray-900 dark:text-white">
            {fileCount}
          </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
            files
          </span>
            <div className="mt-1">
            <span className="block text-xs text-gray-600 dark:text-gray-300">
              {storageUsed}
            </span>
            </div>
          </div>
        </div>

        {/* File name */}
        {fileName && (
            <div className="mb-3 p-2 rounded-lg bg-gray-50 dark:bg-gray-700">
              <p className="text-sm text-gray-700 dark:text-gray-300 truncate">
                📄 {fileName}
              </p>
            </div>
        )}

        {/* Buttons */}
        {fileUrl && (
            <div className="flex gap-2">
              <a
                  href={fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center text-sm font-medium px-3 py-2 rounded-lg bg-blue-600 text-white"
              >
                View
              </a>
              <a
                  href={fileUrl}
                  download
                  className="flex-1 text-center text-sm font-medium px-3 py-2 rounded-lg bg-gray-200 text-gray-700 dark:bg-gray-600 dark:text-gray-200"
              >
                Download
              </a>
            </div>
        )}
      </div>
  )
}

export default FileCard
