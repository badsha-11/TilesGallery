const TopGenaretions = async() => {
    const res = await fetch("/data.json", { cache: "no-store" })
    const data = await res.json()
    console.log(data)
    return (
        <div>
            
        </div>
    );
};

export default TopGenaretions;