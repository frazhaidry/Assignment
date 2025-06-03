
const Loading = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-500 border-solid mr-3"></div>
      <p className="text-gray-600 text-lg">Loading...</p>
    </div>
  );
};

export default Loading;
