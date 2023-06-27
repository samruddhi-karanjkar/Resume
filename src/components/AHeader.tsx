import { JOB_TITLE, LOCATION, NAME } from "../config/Config"

export const Header = () => {
    return (
        <header className="inline-flex items-baseline justify-between w-full mb-3 align-top border-b-8">
            <div className="block">
                <h1 className="mb-0 text-5xl font-bold text-gray-750">
                    {NAME}
                </h1>
                {/*Job Title-------------------------------------------------------------------------------------------------------*/}
                <h2 className="m-0 ml-2 text-2xl font-semibold text-gray-700 leading-snugish">
                    {JOB_TITLE}
                </h2>
                {/*Location -------------------------------------------------------------------------------------------------------*/}
                <h3 className="m-0 mt-2 ml-2 font-semibold text-md text-gray-550 leading-snugish">
                    {LOCATION}
                </h3>
            </div>
            {/*   Initials Block         
            <div className="justify-between px-3 mt-0 mb-5 text-3xl font-bold leading-none text-gray-200 initials-container bg-gray-750 print:bg-black" style={{ paddingBottom: '1.5rem', paddingTop: '1.5rem' }}>
                <div className="text-center initial">T</div>
                <div className="text-center initial">L</div>
                <div className="text-center initial">H</div>
            </div>*/}
        </header>
    )
}