import { SKILLS } from "../config/Config"

export const Skills = () => {
    return (
        <section className="sect first:mt-0">
            {/* To keep in the same column */}
            <div className="break-inside-avoid">
                <h2 className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
                    SKILLS
                </h2>
                {
                    SKILLS.map((skill, index) => {
                        return (
                            <section className="mb-2 break-inside-avoid" key={index}>
                                <header>
                                    <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                                        {skill.title}
                                    </h3>
                                </header>
                                <div className="my-1 last:pb-1">
                                    <ul className="flex flex-wrap text-sm2 leading-relaxed -mr-1.6 -mb-1">
                                        {
                                            skill.skills.map((skill, index) => {
                                                return (
                                                    <li className="px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-gray-250" key={index}>
                                                        {skill}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </section>
                        )
                    })
                }
            </div>
        </section>
    )
}