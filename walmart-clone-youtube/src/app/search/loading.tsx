import { Skeleton } from "@/components/ui/skeleton"


const Loading = () => {
    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold mb-2  "> Loading Results </h1>
            <h2 className="mb-5 text-gray-400 "> We won't be long... </h2>

            <div className="grid grid-cols-1 sm:grid-col-2 ld:grid-cols-3   xl:grid-cols-4 gap-10">
                <Skeleton className="w-[300px]  h-[400px]" />
                <Skeleton className="w-[300px]  h-[400px]" />
                <Skeleton className="w-[300px]  h-[400px]" />
                <Skeleton className="w-[300px]  h-[400px]" />
                <Skeleton className="w-[300px]  h-[400px]" />
                <Skeleton className="w-[300px]  h-[400px]" />
                <Skeleton className="w-[300px]  h-[400px]" />
                <Skeleton className="w-[300px]  h-[400px]" />
            </div>
        </div>
    )
}

export default Loading