import {TypeWritterEffect} from "@/components/Effect/TypeWritterEffect";

export default function Home() {
    return (
        <div
            className='h-full overflow-hidden p-6'
        >
            <TypeWritterEffect
                words='Hello, world! I am Dasek Joiakim, student at HEG in Business Information Technology, Switzerland. I am a full-stack developer, passionate about web technologies!'
                className='fixed text-2xl font-mono text-white z-30 w-1/3'
            />
            <div
                className='relative flex items-end p-8 justify-center left-[35%] h-[110%] -top-1/3 transform rotate-45 overflow-hidden bg-[#183D3D] z-20 border border-primary transition duration-500 ease-in-out hover:scale-110 hover:text-white text-transparent'
            >
                <span
                    className='transform -rotate-45'
                >
                    Hello
                </span>
            </div>
            <div
                className='h-full bg-[#5C8374] z-10 transform -rotate-45 hover:scale-150 hover:-z-10 transition duration-500 ease-in-out'
            />
        </div>
    );
}