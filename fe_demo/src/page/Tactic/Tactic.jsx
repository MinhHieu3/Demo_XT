import { useEffect, useState } from "react";
import { getAllCategory } from "../../handler/api/category.jsx";

export default function Tactic() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getAllCategory();
                setCategories(result.data); // Giả sử API trả về dữ liệu trong thuộc tính `data`
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="title">
                <div className="button_choice_title"></div>
                <span>A</span>
            </div>
            <div className="categories">
                {categories.map((category, index) => (
                    <div key={index} className="category">
                        {category.name} {/* Giả sử mỗi category có thuộc tính `name` */}
                    </div>
                ))}
            </div>
        </>
    );
}
