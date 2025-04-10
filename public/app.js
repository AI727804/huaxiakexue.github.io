// 初始化图表
var myChart = echarts.init(document.getElementById('chart-container'), null, {
    renderer: 'canvas',
    theme: 'custom'
});

// 显示加载动画
myChart.showLoading();

// 中国古代历史数据 - 横向布局
var chineseHistoryData = {
    name: "中华文明五千年\n(约前2070-1912年)",
    itemStyle: {
        color: '#8b2513',
        borderColor: '#5a3921'
    },
    label: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#8b2513'
    },
    children: [
        // 先秦时期
        {
            name: "先秦时期\n(约前2070-前221年)\n中华文明奠基期",
            itemStyle: {
                color: '#b35c44',
                borderColor: '#8b3e2d'
            },
            label: {
                fontSize: 18,
                fontWeight: 'bold'
            },
            children: [
                {
                    name: "夏商周三代\n(约前2070-前256年)\n青铜时代",
                    itemStyle: {
                        color: '#c97b5d',
                        borderColor: '#b35c44'
                    },
                    children: [
                        {
                            name: "青铜器工艺\n商周时期达到鼎盛\n代表：司母戊鼎(重832.84kg)\n四羊方尊(精美礼器)",
                            value: "青铜冶炼技术成熟，礼器、兵器制作精美，代表了中国早期金属工艺的最高成就，青铜器上的铭文是研究古代历史的重要资料。",
                            itemStyle: {
                                color: '#e8a87c'
                            }
                        },
                        {
                            name: "甲骨文\n商代晚期成熟\n已发现约4500单字\n记载商王占卜内容",
                            value: "中国最早的系统文字，主要刻在龟甲和兽骨上，内容涉及祭祀、战争、田猎等，是研究商代社会的一手资料，汉字发展的源头。",
                            itemStyle: {
                                color: '#e8a87c'
                            }
                        },
                        {
                            name: "《周易》形成\n包含朴素辩证法\n影响后世哲学\n儒家重要经典",
                            value: "中国最古老的占卜典籍，包含阴阳变化思想，后成为儒家五经之一，对中华哲学、文化、科学都有深远影响。",
                            itemStyle: {
                                color: '#e8a87c'
                            }
                        }
                    ]
                },
                {
                    name: "春秋战国\n(前770-前221年)\n百家争鸣时代",
                    itemStyle: {
                        color: '#c97b5d',
                        borderColor: '#b35c44'
                    },
                    children: [
                        {
                            name: "铁器革命\n春秋晚期开始\n战国广泛使用\n促进农业大发展",
                            value: "铁制农具和牛耕的推广使农业生产力大幅提高，导致井田制瓦解，封建土地私有制确立，为社会变革奠定物质基础。",
                            itemStyle: {
                                color: '#e8a87c'
                            }
                        },
                        {
                            name: "都江堰水利\n李冰父子建造\n无坝引水工程\n至今仍在使用",
                            value: "建于公元前256年左右，由渠首枢纽、灌区渠系和防洪工程组成，科学解决了引水、泄洪、排沙等问题，使成都平原成为天府之国。",
                            itemStyle: {
                                color: '#e8a87c'
                            }
                        },
                        {
                            name: "百家争鸣\n儒家、道家\n墨家、法家\n奠定思想基础",
                            value: "春秋战国时期思想文化大发展，孔子、老子、墨子、韩非子等思想家辈出，形成多种学派，奠定了中华文化思想基础。",
                            itemStyle: {
                                color: '#e8a87c'
                            }
                        },
                        {
                            name: "《诗经》编纂\n中国最早诗歌总集\n305篇作品\n风雅颂三部分",
                            value: "收集了西周初年至春秋中叶的诗歌，反映了当时社会生活的各个方面，开创了中国现实主义文学传统，儒家重要经典之一。",
                            itemStyle: {
                                color: '#e8a87c'
                            }
                        }
                    ]
                }
            ]
        },
        // 秦汉时期
        {
            name: "秦汉时期\n(前221-220年)\n大一统王朝确立",
            itemStyle: {
                color: '#6a8b9e',
                borderColor: '#4a6b7d'
            },
            label: {
                fontSize: 18,
                fontWeight: 'bold'
            },
            children: [
                {
                    name: "秦朝\n(前221-前206年)\n中国首个统一王朝",
                    itemStyle: {
                        color: '#8ba8b9',
                        borderColor: '#6a8b9e'
                    },
                    children: [
                        {
                            name: "中央集权制\n皇帝制度\n三公九卿\n郡县制推行",
                            value: "秦始皇确立皇帝制度，建立以丞相、太尉、御史大夫为首的中枢机构，废除分封制，推行郡县制，奠定了中国两千余年政治制度的基本格局。",
                            itemStyle: {
                                color: '#a8c4d9'
                            }
                        },
                        {
                            name: "统一措施\n书同文(小篆)\n车同轨\n统一度量衡",
                            value: "统一文字为小篆，后演变为隶书；统一车轨宽度；制定标准度量衡器，这些措施促进了经济文化交流，加强了国家统一。",
                            itemStyle: {
                                color: '#a8c4d9'
                            }
                        },
                        {
                            name: "驰道系统\n以咸阳为中心\n东至燕齐\n南达吴楚",
                            value: "修建了以咸阳为中心、通向全国各地的驰道网，道宽五十步，三丈而树，加强了中央对地方的控制，促进了经济文化交流。",
                            itemStyle: {
                                color: '#a8c4d9'
                            }
                        },
                        {
                            name: "长城修筑\n连接各国长城\n西起临洮\n东至辽东",
                            value: "连接和修缮战国长城，建成西起甘肃临洮、东至辽东的万里长城，成为抵御北方游牧民族南下的重要屏障。",
                            itemStyle: {
                                color: '#a8c4d9'
                            }
                        }
                    ]
                },
                {
                    name: "汉朝\n(前202-220年)\n强盛的统一王朝",
                    itemStyle: {
                        color: '#8ba8b9',
                        borderColor: '#6a8b9e'
                    },
                    children: [
                        {
                            name: "造纸术\n蔡伦改进(105年)\n用树皮等原料\n推动文化传播",
                            value: "东汉蔡伦改进造纸术，使用树皮、麻头、破布等原料，制成优质纸张，后经丝绸之路传至世界各地，对文明发展影响深远。",
                            itemStyle: {
                                color: '#a8c4d9'
                            }
                        },
                        {
                            name: "地动仪\n张衡发明(132年)\n测地震方向\n世界最早地震仪",
                            value: "张衡发明的候风地动仪能测定地震方向，比欧洲类似仪器早1700多年，体现了中国古代科技的先进水平。",
                            itemStyle: {
                                color: '#a8c4d9'
                            }
                        },
                        {
                            name: "丝绸之路\n张骞通西域(前138年)\n连接东西方\n促进贸易交流",
                            value: "以长安为起点，经河西走廊、新疆，通往中亚、西亚直至地中海各国的商路，促进了东西方经济文化交流，中国的丝绸、冶铁、凿井技术西传，西域的葡萄、胡桃、音乐等传入。",
                            itemStyle: {
                                color: '#a8c4d9'
                            }
                        },
                        {
                            name: "《史记》完成\n司马迁著\n第一部纪传体通史\n记载三千年历史",
                            value: "司马迁所著，记载了从黄帝到汉武帝约3000年历史，开创纪传体史书体例，被鲁迅誉为'史家之绝唱，无韵之离骚'。",
                            itemStyle: {
                                color: '#a8c4d9'
                            }
                        },
                        {
                            name: "《九章算术》\n数学专著\n246个问题\n分数、方程等",
                            value: "成书于东汉，系统总结了战国至汉代的数学成就，包含面积计算、分数运算、开方、方程等，标志着中国古代数学体系的形成。",
                            itemStyle: {
                                color: '#a8c4d9'
                            }
                        }
                    ]
                }
            ]
        },
        // 魏晋南北朝
        {
            name: "魏晋南北朝\n(220-589年)\n分裂与融合时期",
            itemStyle: {
                color: '#7d8b55',
                borderColor: '#5d6b3d'
            },
            label: {
                fontSize: 18,
                fontWeight: 'bold'
            },
            children: [
                {
                    name: "科学技术\n数学、农学\n医学、地理学\n重要发展时期",
                    itemStyle: {
                        color: '#9daa77',
                        borderColor: '#7d8b55'
                    },
                    children: [
                        {
                            name: "圆周率计算\n祖冲之推算\n精确到3.1415926\n保持纪录千年",
                            value: "祖冲之算出π在3.1415926和3.1415927之间，并提出约率22/7和密率355/113，这一纪录保持了近千年。",
                            itemStyle: {
                                color: '#bdca97'
                            }
                        },
                        {
                            name: "《齐民要术》\n贾思勰著\n现存最早农书\n系统农业技术",
                            value: "成书于北魏，全书10卷92篇，内容涉及耕作、栽培、畜牧、酿造等，系统总结了6世纪前中国北方农业技术成就。",
                            itemStyle: {
                                color: '#bdca97'
                            }
                        },
                        {
                            name: "《水经注》\n郦道元著\n地理学巨著\n记载1252条河流",
                            value: "以《水经》为纲，详细记载了1252条河流的发源、流向及流域内的自然地理、人文地理情况，具有很高的科学价值。",
                            itemStyle: {
                                color: '#bdca97'
                            }
                        },
                        {
                            name: "《伤寒杂病论》\n张仲景著\n中医临床经典\n确立辨证论治",
                            value: "确立了中医辨证论治原则，记载了大量有效方剂，被誉为方书之祖,对后世中医发展影响深远。",
                            itemStyle: {
                                color: '#bdca97'
                            }
                        }
                    ]
                },
                {
                    name: "文化制度\n九品中正制\n佛教传播\n文学艺术发展",
                    itemStyle: {
                        color: '#9daa77',
                        borderColor: '#7d8b55'
                    },
                    children: [
                        {
                            name: "九品中正制\n曹魏创立\n按品第选官\n影响后世科举",
                            value: "曹魏创立的人才选拔制度，由中正官按家世、品德、才能评定人才品第，作为选官依据，后演变为门阀政治的工具。",
                            itemStyle: {
                                color: '#bdca97'
                            }
                        },
                        {
                            name: "佛教传播\n白马寺建立(68年)\n石窟艺术发展\n儒释道交融",
                            value: "佛教自东汉传入，南北朝时期广泛传播，开凿了云冈、龙门等石窟，佛教思想与中国传统文化逐渐融合。",
                            itemStyle: {
                                color: '#bdca97'
                            }
                        },
                        {
                            name: "文学发展\n建安文学\n陶渊明田园诗\n《文心雕龙》",
                            value: "建安七子、陶渊明等诗人成就突出，刘勰《文心雕龙》系统论述文学理论，标志着文学自觉时代的到来。",
                            itemStyle: {
                                color: '#bdca97'
                            }
                        },
                        {
                            name: "书法艺术\n钟繇楷书\n王羲之行书\n《兰亭序》杰作",
                            value: "楷书、行书成熟，王羲之被尊为书圣，其《兰亭序》被誉为天下第一行书，影响后世书法发展。",
                            itemStyle: {
                                color: '#bdca97'
                            }
                        }
                    ]
                }
            ]
        },
        // 隋唐时期
        {
            name: "隋唐时期\n(581-907年)\n盛世辉煌时代",
            itemStyle: {
                color: '#b38659',
                borderColor: '#936639'
            },
            label: {
                fontSize: 18,
                fontWeight: 'bold'
            },
            children: [
                {
                    name: "隋朝\n(581-618年)\n承前启后王朝",
                    itemStyle: {
                        color: '#d9b38c',
                        borderColor: '#b38659'
                    },
                    children: [
                        {
                            name: "大运河\n以洛阳为中心\n北至涿郡\n南达余杭",
                            value: "分为永济渠、通济渠、邗沟和江南河四段，全长2700公里，连接海河、黄河、淮河、长江和钱塘江五大水系，促进了南北经济文化交流。",
                            itemStyle: {
                                color: '#f2d9b3'
                            }
                        },
                        {
                            name: "科举制度\n进士科创立\n打破世族垄断\n开辟晋升通道",
                            value: "隋炀帝创立进士科，通过考试选拔人才，打破了世族垄断仕途的局面，为平民提供了上升通道，影响后世1300余年。",
                            itemStyle: {
                                color: '#f2d9b3'
                            }
                        },
                        {
                            name: "赵州桥\n李春设计\n世界最早敞肩拱桥\n现存最古老石拱桥",
                            value: "建于隋朝，全长50.82米，主拱跨径37.02米，采用敞肩拱设计，比欧洲同类桥梁早1200多年，历经多次地震仍完好。",
                            itemStyle: {
                                color: '#f2d9b3'
                            }
                        },
                        {
                            name: "三省六部制\n中书决策\n门下审核\n尚书执行",
                            value: "确立了三省(中书、门下、尚书)分工合作的中央官制，尚书省下设吏、户、礼、兵、刑、工六部，为后世王朝所沿袭。",
                            itemStyle: {
                                color: '#f2d9b3'
                            }
                        }
                    ]
                },
                {
                    name: "唐朝\n(618-907年)\n开放包容盛世",
                    itemStyle: {
                        color: '#d9b38c',
                        borderColor: '#b38659'
                    },
                    children: [
                        {
                            name: "雕版印刷\n《金刚经》最早\n促进文化传播\n为活字印刷奠基",
                            value: "现存最早的雕版印刷品是868年的《金刚经》，印刷术的发明极大促进了文化传播，后传至朝鲜、日本和欧洲。",
                            itemStyle: {
                                color: '#f2d9b3'
                            }
                        },
                        {
                            name: "火药发明\n炼丹家发现\n唐末用于军事\n改变战争形态",
                            value: "炼丹家在炼制丹药时偶然发现，唐末开始用于军事，制造了飞火等武器，后经阿拉伯传入欧洲，推动军事革命。",
                            itemStyle: {
                                color: '#f2d9b3'
                            }
                        },
                        {
                            name: "中外交流\n长安国际都市\n遣唐使来华\n鉴真东渡",
                            value: "长安人口百万，有大量外国商人、使节，日本派遣遣唐使19次，鉴真六次东渡传播佛教，促进了中外文化交流。",
                            itemStyle: {
                                color: '#f2d9b3'
                            }
                        },
                        {
                            name: "唐诗繁荣\n李白杜甫\n王维白居易\n现存五万首",
                            value: "唐诗是中国诗歌高峰，现存约5万首，李白、杜甫、白居易等诗人成就卓越，题材广泛，风格多样。",
                            itemStyle: {
                                color: '#f2d9b3'
                            }
                        },
                        {
                            name: "《唐本草》\n世界第一部\n国家颁行药典\n比欧洲早800年",
                            value: "唐高宗时期由政府组织编修，收录药物850种，图文并茂，是世界上第一部由国家颁行的药典，比欧洲早800多年。",
                            itemStyle: {
                                color: '#f2d9b3'
                            }
                        }
                    ]
                }
            ]
        },
        // 宋元时期
        {
            name: "宋元时期\n(960-1368年)\n科技文化高峰",
            itemStyle: {
                color: '#8b5d7d',
                borderColor: '#6b3d5d'
            },
            label: {
                fontSize: 18,
                fontWeight: 'bold'
            },
            children: [
                {
                    name: "宋朝\n(960-1279年)\n经济科技繁荣",
                    itemStyle: {
                        color: '#aa77aa',
                        borderColor: '#8b5d7d'
                    },
                    children: [
                        {
                            name: "活字印刷\n毕升发明(1040s)\n胶泥活字\n印刷技术革命",
                            value: "毕升发明胶泥活字，后发展出木活字、金属活字，比欧洲古腾堡活字印刷早400年，极大提高了印刷效率。",
                            itemStyle: {
                                color: '#c48ec4'
                            }
                        },
                        {
                            name: "指南针应用\n用于航海\n《梦溪笔谈》记载\n促进远洋航行",
                            value: "沈括《梦溪笔谈》记载了指南针制作方法，宋代广泛用于航海，后经阿拉伯传入欧洲，推动了地理大发现。",
                            itemStyle: {
                                color: '#c48ec4'
                            }
                        },
                        {
                            name: "交子纸币\n世界最早\n四川地区发行\n金融制度创新",
                            value: "北宋初年四川商人发行，1023年政府设立交子务统一发行，比欧洲早600多年，是货币发展史上的重大创新。",
                            itemStyle: {
                                color: '#c48ec4'
                            }
                        },
                        {
                            name: "《营造法式》\n李诫编著\n建筑技术规范\n34卷357篇",
                            value: "北宋官方颁布的建筑设计、施工规范，涉及土木工程各工种，体现了宋代建筑技术的标准化和模数化思想。",
                            itemStyle: {
                                color: '#c48ec4'
                            }
                        },
                        {
                            name: "宋词鼎盛\n苏轼李清照\n辛弃疾陆游\n婉约与豪放",
                            value: "宋代文学代表，现存两万余首，苏轼、辛弃疾开创豪放派，柳永、李清照为婉约派代表，题材广泛，艺术成就高。",
                            itemStyle: {
                                color: '#c48ec4'
                            }
                        }
                    ]
                },
                {
                    name: "元朝\n(1271-1368年)\n中外交流扩大",
                    itemStyle: {
                        color: '#aa77aa',
                        borderColor: '#8b5d7d'
                    },
                    children: [
                        {
                            name: "《授时历》\n郭守敬编制\n精确度极高\n使用364年",
                            value: "郭守敬主持编制，测定一年为365.2425日，与现行公历相同但早300年，是中国古代最精确的历法。",
                            itemStyle: {
                                color: '#c48ec4'
                            }
                        },
                        {
                            name: "棉纺技术\n黄道婆改进\n推广轧棉机\n促进纺织业",
                            value: "黄道婆从海南黎族学得技术并改进，推广轧棉机、弹棉弓等工具，使松江成为棉纺织业中心。",
                            itemStyle: {
                                color: '#c48ec4'
                            }
                        },
                        {
                            name: "元曲繁荣\n关汉卿白朴\n马致远郑光祖\n《窦娥冤》代表",
                            value: "元代文学代表，关汉卿《窦娥冤》、王实甫《西厢记》等作品反映社会现实，语言通俗生动，表演形式成熟。",
                            itemStyle: {
                                color: '#c48ec4'
                            }
                        },
                        {
                            name: "东西方交流\n马可·波罗来华\n《马可·波罗游记》\n促进相互了解",
                            value: "威尼斯商人马可·波罗在华17年，其游记详细记载了元代中国的繁荣，激发了欧洲人对东方的向往。",
                            itemStyle: {
                                color: '#c48ec4'
                            }
                        },
                        {
                            name: "海运发展\n开辟北洋航线\n年运粮量达300万石\n促进南北贸易",
                            value: "开辟从刘家港到直沽的海运航线，最多年运粮量达300万石，促进了南北物资交流和沿海港口城市发展。",
                            itemStyle: {
                                color: '#c48ec4'
                            }
                        }
                    ]
                }
            ]
        },
        // 明清时期
        {
            name: "明清时期\n(1368-1912年)\n传统与变革",
            itemStyle: {
                color: '#5d7d8b',
                borderColor: '#3d5d6b'
            },
            label: {
                fontSize: 18,
                fontWeight: 'bold'
            },
            children: [
                {
                    name: "明朝\n(1368-1644年)\n科技综合发展",
                    itemStyle: {
                        color: '#779daa',
                        borderColor: '#5d7d8b'
                    },
                    children: [
                        {
                            name: "郑和下西洋\n1405-1433年\n七次远航\n最远达非洲",
                            value: "郑和率庞大船队七下西洋，访问30多个国家和地区，最远到达非洲东海岸，展示了明朝国力和航海技术。",
                            itemStyle: {
                                color: '#8ec4d9'
                            }
                        },
                        {
                            name: "《本草纲目》\n李时珍著\n1892种药物\n11096个药方",
                            value: "历时27年编成，系统总结了16世纪前中国药物学成就，被达尔文称为中国古代百科全书，影响世界医学发展。",
                            itemStyle: {
                                color: '#8ec4d9'
                            }
                        },
                        {
                            name: "火器发展\n神机营建立\n佛郎机引进\n红衣大炮制造",
                            value: "明朝建立专业火器部队神机营，引进西方佛郎机炮，自主制造红衣大炮，火器技术在世界上仍处于领先地位。",
                            itemStyle: {
                                color: '#8ec4d9'
                            }
                        },
                        {
                            name: "《农政全书》\n徐光启著\n50卷70多万字\n农业科学巨著",
                            value: "系统总结了历代农业生产经验和知识，并吸收了西方科学成果，是中国古代农业科学集大成之作。",
                            itemStyle: {
                                color: '#8ec4d9'
                            }
                        },
                        {
                            name: "《天工开物》\n宋应星著\n中国17世纪\n工艺百科全书",
                            value: "详细记载了农业、手工业各领域生产技术，特别是机械、冶金、陶瓷等方面，具有重要科学价值。",
                            itemStyle: {
                                color: '#8ec4d9'
                            }
                        }
                    ]
                },
                {
                    name: "清朝\n(1636-1912年)\n传统科技总结",
                    itemStyle: {
                        color: '#779daa',
                        borderColor: '#5d7d8b'
                    },
                    children: [
                        {
                            name: "《四库全书》\n纪昀主编\n79337卷\n古代最大丛书",
                            value: "乾隆时期编纂，收录古籍3503种，79337卷，约8亿字，是中国古代最大的丛书，保存了大量珍贵文献。",
                            itemStyle: {
                                color: '#8ec4d9'
                            }
                        },
                        {
                            name: "京张铁路\n詹天佑设计\n1909年通车\n第一条自主铁路",
                            value: "詹天佑创造性地设计人字形线路解决坡度问题，是中国第一条自主设计建造的铁路，标志工程技术的进步。",
                            itemStyle: {
                                color: '#8ec4d9'
                            }
                        },
                        {
                            name: "《医宗金鉴》\n吴谦主编\n90卷\n中医临床经典",
                            value: "清政府组织编纂的中医临床百科全书，内容系统全面，成为清代医学教育和临床实践的重要参考书。",
                            itemStyle: {
                                color: '#8ec4d9'
                            }
                        },
                        {
                            name: "西学东渐\n传教士来华\n《几何原本》翻译\n科学知识传入",
                            value: "利玛窦等传教士带来西方科技知识，与徐光启合译《几何原本》，促进了中西科学文化交流。",
                            itemStyle: {
                                color: '#8ec4d9'
                            }
                        },
                        {
                            name: "景德镇瓷器\n工艺登峰造极\n釉彩丰富\n远销海外",
                            value: "清代景德镇瓷器在工艺和艺术上达到高峰，创制了粉彩、珐琅彩等新品种，成为重要的出口商品。",
                            itemStyle: {
                                color: '#8ec4d9'
                            }
                        }
                    ]
                }
            ]
        }
    ]
};

// 配置项
var option = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
        formatter: function(params) {
            var tip = '<div style="font-weight:bold;font-size:16px;color:#8b2513;margin-bottom:8px;border-bottom:1px solid #e8d5b5;padding-bottom:5px;">' + 
                      params.name.replace(/\n/g, '<br/>') + '</div>';
            if (params.data.value) {
                tip += '<div style="font-size:14px;line-height:1.6;color:#5a3921;">' + 
                       params.data.value + '</div>';
            }
            return tip;
        },
        backgroundColor: '#fff9f0',
        borderColor: '#e8d5b5',
        borderWidth: 1,
        padding: 15,
        textStyle: {
            color: '#5a3921',
            fontSize: 14,
            lineHeight: 1.6
        },
        extraCssText: 'box-shadow: 0 4px 12px rgba(90, 57, 33, 0.2); max-width: 300px;'
    },
    series: [{
        type: 'tree',
        data: [chineseHistoryData],
        left: '3%',
        right: '3%',
        top: '8%',
        bottom: '8%',
        symbol: 'roundRect',
        symbolSize: [12, 6],
        orient: 'horizontal',
        expandAndCollapse: true,
        initialTreeDepth: 2,
        label: {
            position: 'top',
            verticalAlign: 'middle',
            align: 'center',
            fontSize: 14,
            color: '#4a3520',
            rich: {
                title: {
                    fontSize: 16,
                    color: '#8b2513',
                    fontWeight: 'bold',
                    padding: [0, 0, 5, 0],
                    lineHeight: 22
                },
                period: {
                    fontSize: 12,
                    color: '#8b7d6b',
                    fontStyle: 'italic'
                }
            },
            formatter: function(params) {
                var name = params.name;
                if (name.indexOf('\n') > -1) {
                    var parts = name.split('\n');
                    var result = '{title|' + parts[0] + '}';
                    if (parts.length > 1) {
                        result += '\n{period|' + parts.slice(1).join('\n') + '}';
                    }
                    return result;
                }
                return name;
            }
        },
        leaves: {
            label: {
                position: 'bottom',
                verticalAlign: 'middle',
                align: 'center',
                fontSize: 13
            }
        },
        itemStyle: {
            borderColor: '#8b7d6b',
            borderWidth: 1,
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 5,
            shadowOffsetY: 2
        },
        lineStyle: {
            color: '#8b7d6b',
            width: 2,
            curveness: 0.2,
            type: 'solid'
        },
        emphasis: {
            focus: 'descendant',
            itemStyle: {
                borderWidth: 2,
                borderColor: '#8b2513',
                shadowBlur: 10,
                shadowColor: 'rgba(139, 37, 19, 0.3)'
            },
            lineStyle: {
                width: 3,
                color: '#8b2513'
            }
        },
        animationDuration: 1000,
        animationDurationUpdate: 1200,
        edgeShape: 'polyline',
        edgeSymbol: ['none', 'arrow'],
        edgeSymbolSize: [8, 12],
        // 布局配置防止重叠
        layout: 'orthogonal',
        roam: true,
        expandAndCollapse: true,
        initialTreeDepth: 2,
        symbolKeepAspect: true
    }],
    // 添加连接线显示控制
    graphic: (function() {
        var connections = [
            {
                from: '先秦时期',
                to: '秦汉时期',
                lineStyle: {
                    color: '#8b7d6b',
                    width: 2,
                    curveness: 0
                }
            },
            {
                from: '秦汉时期',
                to: '魏晋南北朝',
                lineStyle: {
                    color: '#8b7d6b',
                    width: 2,
                    curveness: 0
                }
            },
            {
                from: '魏晋南北朝',
                to: '隋唐时期',
                lineStyle: {
                    color: '#8b7d6b',
                    width: 2,
                    curveness: 0
                }
            },
            {
                from: '隋唐时期',
                to: '宋元时期',
                lineStyle: {
                    color: '#8b7d6b',
                    width: 2,
                    curveness: 0
                }
            },
            {
                from: '宋元时期',
                to: '明清时期',
                lineStyle: {
                    color: '#8b7d6b',
                    width: 2,
                    curveness: 0
                }
            }
        ];
        
        return connections.map(function(conn) {
            return {
                type: 'line',
                z: -1,
                invisible: true,
                shape: {
                    x1: 0, y1: 0,
                    x2: 0, y2: 0
                },
                style: {
                    stroke: conn.lineStyle.color,
                    lineWidth: conn.lineStyle.width,
                    lineDash: [5, 5]
                },
                animation: false
            };
        });
    })(),
    animation: true,
    animationDuration: 1500,
    animationEasing: 'quinticInOut',
    backgroundColor: 'transparent'
};

// 设置配置项并隐藏加载动画
myChart.hideLoading();
myChart.setOption(option);

// 响应式调整
window.addEventListener('resize', function() {
    myChart.resize();
});

// 按钮功能
document.getElementById('expand-all').addEventListener('click', function() {
    option.series[0].initialTreeDepth = 10;
    myChart.setOption(option);
});

document.getElementById('collapse-all').addEventListener('click', function() {
    option.series[0].initialTreeDepth = 1;
    myChart.setOption(option);
});

// 显示/隐藏时代联系线
var showConnections = false;
document.getElementById('show-connections').addEventListener('click', function() {
    showConnections = !showConnections;
    var graphic = option.graphic;
    for (var i = 0; i < graphic.length; i++) {
        graphic[i].invisible = !showConnections;
    }
    myChart.setOption({graphic: graphic});
    this.textContent = showConnections ? '隐藏时代关联' : '显示时代关联';
});

// 自动调整布局
document.getElementById('adjust-layout').addEventListener('click', function() {
    myChart.dispatchAction({
        type: 'treeExpandAndCollapse',
        // 先全部折叠
        collapseAll: true
    });
    
    setTimeout(function() {
        myChart.dispatchAction({
            type: 'treeExpandAndCollapse',
            // 再展开到第二层
            expandToLevel: 2
        });
        
        // 最后调整布局
        myChart.setOption({
            series: [{
                type: 'tree',
                layout: 'orthogonal',
                roam: true
            }]
        });
    }, 500);
});

// 防止标签重叠的自适应调整
function adjustLabels() {
    var seriesModel = myChart.getModel().getSeries()[0];
    var data = seriesModel.getData();
    
    data.each(function(idx) {
        var node = data.getGraphicEl(idx);
        if (node) {
            var label = node.getTextContent();
            if (label) {
                // 根据节点层级调整标签位置
                var depth = data.get('depth', idx);
                if (depth === 0) {
                    label.y = -25;
                } else if (depth === 1) {
                    label.y = -20;
                } else {
                    label.y = 20;
                }
                
                // 根据文字长度微调位置
                var nameLength = data.getName(idx).length;
                if (nameLength > 15) {
                    label.x = 0;
                    if (depth < 2) {
                        label.y -= 5;
                    }
                }
            }
        }
    });
}

myChart.on('finished', adjustLabels);
myChart.on('dataZoom', adjustLabels);