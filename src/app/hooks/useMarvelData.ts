"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import crypto from "crypto";

const useMarvelData = (resource: string) => {
    const [data, setData] = useState<any[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");
    const truncate = (input: string) =>
        input?.length > 100 ? `${input.substring(0, 90)}...` : input;

    const privateKey: string = "be054a6c90df07f6bc9bffa2f333389ccd118c8c";
    const publicKey: string = "9a3520283a4a8ea16f4dcbb2cde5ff46";
    const timestamp: string = Date.now().toString();

    useEffect(() => {
        const fetchData = async () => {
            const concatString: string = timestamp + privateKey + publicKey;
            const hash: string = crypto
                .createHash("md5")
                .update(concatString)
                .digest("hex");

            try {
                const response = await axios.get(
                    `https://gateway.marvel.com:443/v1/public/${resource}`,
                    {
                        params: {
                            apikey: publicKey,
                            hash: hash,
                            ts: timestamp,
                        },
                    }
                );
                setData(response.data.data.results);
                setLoading(false);
            } catch (error) {
                setError("Error fetching data");
                setLoading(false);
            }
        };

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resource]);

    return { data, loading, error, truncate };
};

export default useMarvelData;
