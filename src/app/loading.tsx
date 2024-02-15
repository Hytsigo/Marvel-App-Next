import { MoonLoader } from "react-spinners";

export default function Loading() {
    return (
        <div className="flex flex-1 justify-center py-40">
            <MoonLoader color="grey" />
        </div>
    );
}
