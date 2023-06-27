import { CONTACT } from "../config/Config"

export const Contact = () => {
    return (
        <section className="sect first:mt-0">
            {/* To keep in the same column ------------------------------------------------------------------------*/}
            <div className="break-inside-avoid">
                <section className="pb-2 mb-2 border-b-2 break-inside-avoid">
                    <ul className="list-inside pr-7">
                        {
                            CONTACT.map((contact, index) => {
                                return (
                                    <li key={index} className="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700">
                                        <a href={contact.link} rel="noreferrer" target={"_blank"} className="group">
                                            <span
                                                className="text-lg font-semibold text-gray-700 leading-snugish"
                                                style={{ marginRight: contact.margin ? contact.margin : 0 }}
                                            >
                                                {contact.name}:
                                            </span>
                                            {contact.value}

                                            <span className="inline-block font-normal transition duration-100 ease-in text-gray-550 print:text-black group-hover:text-gray-700">
                                                ↗
                                            </span>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section>
            </div>
        </section>
    )
}