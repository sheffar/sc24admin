import { useState, useEffect } from "react"

export const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let requestData = await fetch("https://nifesscbackend.vercel.app/admin/users");
                const resData = await requestData.json();
                console.log(resData)

                if (requestData.ok) {
                    setData(resData)
                }
            } catch (e) {
                console.error(e.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const links = ['Name', 'Level', 'Phone No', 'Gender', "Lodge", 'School', 'Marital Status'];

    if (loading) {
        return <div className="text-lg font-bold text-green-500 text-center w-full">Loading...</div>;
    }

    return (
        <>
            <div className="bg-gray-500/20 w-full flex flex-col  items-center">
                <div className="px-3 flex  justify-between mb-2 w-full">
                    <p className="text-black font-bold text-ms">Total number of registered persons:</p>
                    <p className="text-black font-bold text-ms">{data.length}</p>
                </div>

                <div className="w-full overflow-x-auto px-3">
                    <div className="grid grid-flow-col py-2 auto-cols-[max-content] sm:justify-between overflow-x-visible gap-10">
                        {links.map((link, index) => (
                            <div key={index} className="grid place-content-center">
                                <p className="font-semibold">{link}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {data.map((info, index) => (
                    <div key={index} className="w-full overflow-x-auto mt-3 bg-black px-3">
                        <div className="grid grid-flow-col py-2 auto-cols-[max-content] sm:justify-between overflow-x-visible gap-6">
                            <div className="grid place-content-center">
                                <p className="font-semibold text-white px-2">{info.fullname}</p>
                            </div>
                            <div className="grid place-content-center">
                                <p className="font-semibold text-white px-2">{info.levelinschool}</p>
                            </div>
                            
                            <div className="grid place-content-center">
                                <p className="font-semibold text-white px-2">{info.phonenumber}</p>
                            </div>
                           
                            <div className="grid place-content-center">
                                <p className="font-semibold text-white px-2">{info.gender}</p>
                            </div>
                            <div className="grid place-content-center">
                                <p className="font-semibold text-white px-2">{info.lodge}</p>
                            </div>
                            <div className="grid place-content-center">
                                <p className="font-semibold text-white px-2">{info.nameofschool}</p>
                            </div>
                            <div className="grid place-content-center">
                                <p className="font-semibold text-white px-2">{info.maritalstatus}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
