import Image from "next/image";

const Error = () => {
  return (
    <div className="relative w-full h-56 bg-black">
      
      <div className="absolute inset-0">
        <Image
          src="/hero2.png" 
          alt="Shopping Header Background"
          className="w-full h-full object-cover"
        />
      </div>

      
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-3xl md:text-5xl font-bold">Shopping Cart</h1>
        <p className="mt-6 text-sm md:text-base text-gray-300">
          <span className="text-gray-400">Home</span> &gt;{" "}
          <span className="text-yellow-400 gap-3">Shopping Cart</span>
        </p>
      </div>
    </div>
    
  );
};

export default Error;
