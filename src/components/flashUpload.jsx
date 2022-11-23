import useUploadImages from "../hooks/useUploadImages";

const FlashUpload = () => {
  
  const handleUpload = async (e) => {
    e.preventDefault();
    await useUploadImages([...e.target.files], 'Flash_Upload');
  }

  return (
    <div className="flex flex-col min-h-full items-center py-12 px-4 sm:px-6 lg:px-8">
      <h2>Upload More Flash</h2>
      <p>Reminder about file sizes here:</p>
      <input 
        type='files'
        onChange={handleUpload} 
        multiple
      >
        Select Files
      </input>
    </div>
  )
}

export default FlashUpload;