import json

def summarize_dynasties_data(data_list):
    summary = {
        "id": -1,
        "dynastyName": "总计",
        "image": "📊📈",
        "details": "中国古代朝代科技发展汇总",
        "pieData1": ["数学", "物理", "化学", "医学", "农学", "地球科学", "建筑学", "天文学", "工艺学"],
        "pieData2": [{"name": field, "value": 0} for field in ["数学", "物理", "化学", "医学", "农学", "地球科学", "建筑学", "天文学", "工艺学"]],
        "mapData1": [],
        "barData1": [],
        "lineData1": []
    }
    
    # 地区数据临时存储
    region_data = {}
    time_series_data = {}
    
    # 汇总各项数据
    for dynasty in data_list:
        # 汇总 pieData2 数据
        for i, item in enumerate(dynasty.get("pieData2", [])):
            summary["pieData2"][i]["value"] += item["value"]
            
        # 汇总地区数据
        for region in dynasty.get("mapData1", []):
            if region["name"] not in region_data:
                region_data[region["name"]] = {
                    "name": region["name"],
                    "value": 0,
                    "description": set()
                }
            region_data[region["name"]]["value"] += region["value"]
            if "description" in region:
                for desc in region["description"].split("<br/>"):
                    region_data[region["name"]]["description"].add(desc.strip())
        
        # 汇总时间序列数据
        for time_point in dynasty.get("lineData1", []):
            year = time_point[0]
            value = time_point[1]
            if year not in time_series_data:
                time_series_data[year] = 0
            time_series_data[year] += value
    
    # 处理地区数据
    for region_name, region in region_data.items():
        region["description"] = "<br/>".join(list(region["description"])[:10])
        summary["mapData1"].append(region)
        summary["barData1"].append(region.copy())
    
    # 排序处理
    summary["mapData1"].sort(key=lambda x: x["value"], reverse=True)
    summary["barData1"].sort(key=lambda x: x["value"], reverse=True)
    
    # 处理时间序列数据
    summary["lineData1"] = [[year, value] for year, value in sorted(time_series_data.items())]
    
    return summary

def main():
    # 读取所有朝代数据
    with open('e:/Programs/2025/DataVisualization/json/Data.json', 'r', encoding='utf-8') as f:
        dynasties_data = json.load(f)
    
    # 生成汇总数据
    total_data = summarize_dynasties_data(dynasties_data)
    
    # 保存汇总结果
    with open('e:/Programs/2025/DataVisualization/json/DataTotal.json', 'w', encoding='utf-8') as f:
        json.dump(total_data, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    main()