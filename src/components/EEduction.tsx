import { EDUCATION } from "../config/Config"

export const Education = () => {
    return (
        <section className="sect border-b-4 first:mt-0">
            <div className="break-inside-avoid">
                <h2 className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
                    EDUCATION
                </h2>
                {
                    EDUCATION.map((school, index) => {
                        return (
                            <section key={index} className="mt-5 mb-5 break-inside-avoid border-l-2 pl-2">
                                <header>
                                    <h3 className="text-lg font-semibold text-gray-650 leading-snugish">
                                        {school.title}
                                    </h3>
                                    <p className="leading-normal text-md text-gray-550">
                                        {school.date}
                                    </p>
                                </header>
                                {
                                    school.details.map((detail, index) => {
                                        return (
                                            <p key={index} className="mt-1 leading-normal text-md text-gray-650">
                                                <span className="font-semibold text-gray-700 text-md leading-snugish">
                                                    {detail.title}:
                                                </span> {detail.description}
                                            </p>
                                        )
                                    })
                                }
                            </section>
                        )
                    })
                }
            </div>
        </section>
    )
}