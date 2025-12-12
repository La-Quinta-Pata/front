    import { useState, useEffect } from "react";
    import { getAxes } from "../services/axes";
    import { getAllMigrants } from "../services/migrants";

    export default function useVideoFormData() {
    const [axes, setAxes] = useState([]);
    const [migrants, setMigrants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadData();
    }, []);

    async function loadData() {
        try {
        setLoading(true);
        setError(null);

        const [axesData, migrantsData] = await Promise.all([
            getAxes(),
            getAllMigrants(),
        ]);

        setAxes(axesData);
        setMigrants(migrantsData);
        } catch (err) {
        setError(err);
        } finally {
        setLoading(false);
        }
    }

    return { axes, migrants, loading, error };
    }