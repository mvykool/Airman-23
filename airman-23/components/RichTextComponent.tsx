import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../lib/client";

export const RichTextComponents = {
    types: {
        image: ({ value }: any) => {
            return(
                <div className="relative w-full h-96 m-10 mx-auto">
                    <Image
                    className="object-contain"
                    src={urlFor(value).url()}
                    alt='blog'
                    fill
                    />
                </div>
            );
        },
    },
    list: {
        bullet: ({children}: any) => (
            <ul className="ml-10 py-5 list-disc space-y-5" >{children}</ul>
        ),
        number: ({children}: any) => (
            <ol className="mt-lg list-decimal">{children}</ol>
        ),    
    },
    block: {
        h1: ({ children}: any) => (
            <h1 className="text-5xl py-10 font-bold">{children}</h1>
        ),
        h2: ({ children}: any) => (
            <h1 className="text-4xl py-10 font-bold">{children}</h1>
        ),
        h3: ({ children}: any) => (
            <h1 className="text-3xl py-10 font-bold">{children}</h1>
        ),
        h4: ({ children}: any) => (
            <h1 className="text-md py-5">{children}</h1>
        ),

        blockquote: ({children}: any) => (
            <blockquote className="border-l-[#00708c] border-l-4  pl-5 py-5 my-5 text-gray-600">{children}</blockquote>
        ),
    },
    marks: {
        link: ({children, value}: any) =>  (
            <Link
            href={value.href}
            className='underline decoration-[#00708c] hover:decoration-black'
            >
                {children}
            </Link>
        ),
        
    },
}