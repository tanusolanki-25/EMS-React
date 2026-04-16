
const FailedTask = ({ data }) => {
  return (
    <div className="shrink-0 h-[300px] w-[300px] p-5 bg-[#1f1f1f] rounded-2xl shadow-md hover:scale-105 transition">

      <div className="flex justify-between items-center">
        <span className="bg-red-600 text-xs px-3 py-1 rounded-full text-white">
          {data.category}
        </span>
        <span className="text-sm text-gray-400">
          {data.date}
        </span>
      </div>

      <h2 className="mt-4 text-xl font-semibold text-white" style={{height: '40px'}}>
        {data.title}
      </h2>

      <p className="text-gray-400 text-sm mt-2 line-clamp-3" style={{height: '70px'}}>
        {data.description}
      </p>

      <div className="mt-6">
        <button className="bg-red-600 text-white text-sm py-2 rounded-lg w-full cursor-default">
          ❌ Failed
        </button>
      </div>

    </div>
  )
}

export default FailedTask