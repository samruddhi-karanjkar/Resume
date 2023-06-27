import { EXPERIENCE } from "../config/Config"

export const Experience = () => {
    return (
        <section className="sect border-b-4 first:mt-0">
            {/* To keep in the same column -----------------------------------------------------------------------*/}
            <div className="break-inside-avoid">
                <h2 className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
                    EXPERIENCE
                </h2>
                {
                    EXPERIENCE.map((job, index) => {
                        return (
                            <section key={index} className="mb-5 mt-5 break-inside-avoid border-l-2 pl-2">
                                <header>
                                    <h3 className="text-lg font-semibold text-gray-650 leading-snugish">
                                        {job.title}
                                    </h3>
                                    <p className="leading-normal text-md text-gray-550">
                                        {job.date} | {job.company}
                                    </p>
                                </header>
                                <ul className="mt-2.1 text-md text-gray-700 leading-normal">
                                    {
                                        job.bullets.map((bullet, index) => {
                                            return (
                                                <li key={index}>
                                                    <span className="transform -translate-y-px select-none text-gray-550">
                                                        ›
                                                    </span> {bullet}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </section>
                        )
                    })
                }
            </div>
        </section>
    )
}