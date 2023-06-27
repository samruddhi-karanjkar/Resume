import { SUMMARY } from "../config/Config"

export const Summary = () => {
    return (
        <section className="sect border-b-4 first:mt-0">
            {/* To keep in the same column */}
            <div className="break-inside-avoid">
                <h2 className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
                    SUMMARY
                </h2>
                <section className="mb-2 break-inside-avoid">
                    <p className="mt-2 leading-normal text-gray-700 text-md">
                        {SUMMARY}
                    </p>
                </section>
            </div>
        </section>
    )
}