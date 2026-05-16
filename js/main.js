/* ============================================
   搬砖营地 BrickCamp - Main Application
   ============================================ */

// ======================== DATA ========================

const GAMES = [
  { id: 'delta', name: '三角洲行动', icon: '🔫', genre: '射击 · 撤离', earnMin: 35, earnMax: 60, difficulty: 4, change: 'up', changeText: '本周收益上涨 15%', verified: '2026-05-16', tags: ['热门', '高收益'], detail: '三角洲行动是当前搬砖收益最高的游戏之一。零号大坝、长弓溪谷等地图的高价值物资刷新率高，配合正确的撤离路线和安全策略，熟练玩家每小时可稳定收益40-60元。建议配置消音武器和3级以上护甲。' },
  { id: 'nishuihan', name: '逆水寒手游', icon: '⚔️', genre: 'MMORPG', earnMin: 28, earnMax: 45, difficulty: 3, change: 'up', changeText: '新赛季收益提升', verified: '2026-05-16', tags: ['热门', '稳定'], detail: '逆水寒手游新赛季更新后，青龙秘境和白虎殿成为搬砖首选副本。配合每日副职业产出和帮会任务，日均收益约150-200元。推荐内功职业，装备需求低，副本节奏快。' },
  { id: 'mhxy', name: '梦幻西游', icon: '🏮', genre: '回合制 RPG', earnMin: 22, earnMax: 38, difficulty: 2, change: 'up', changeText: '新活动加成 +8%', verified: '2026-05-15', tags: ['新手友好', '安全'], detail: '梦幻西游是最适合新手入门的搬砖游戏。师门任务稳定保底，跑环、打图、捉鬼等玩法收益可观。109级五开配置月入3000-5000元。经济系统成熟，出金渠道完善。' },
  { id: 'poe2', name: '流放之路2', icon: '🔮', genre: 'ARPG', earnMin: 25, earnMax: 40, difficulty: 4, change: 'up', changeText: '赛季初爆发期', verified: '2026-05-15', tags: ['高难度', '赛季'], detail: '流放之路2赛季初是搬砖黄金期。通货价格高，装备需求旺盛。熟练的玩家可在首周内建立稳定的搬砖体系，日均收益200-300元。推荐召唤流派和速刷BD。' },
  { id: 'wow', name: '魔兽世界怀旧服', icon: '🐉', genre: 'MMORPG', earnMin: 20, earnMax: 35, difficulty: 3, change: 'stable', changeText: '长期稳定', verified: '2026-05-14', tags: ['经典', '稳定'], detail: '魔兽世界怀旧服拥有成熟的GKP金币体系和稳定的玩家群体。单刷副本、双采集专业、制造专业都是稳定的搬砖途径。斯坦索姆和通灵学院的收益最为稳定。' },
  { id: 'dnf', name: 'DNF 地下城与勇士', icon: '🔥', genre: '横版格斗', earnMin: 18, earnMax: 32, difficulty: 3, change: 'stable', changeText: '收益趋于稳定', verified: '2026-05-14', tags: ['经典'], detail: 'DNF是历史最悠久的搬砖游戏之一。风暴航路和未央幻境是当前版本主搬砖副本。多号党优势明显，12个角色轮刷日均收益约200元。需要一定装备基础。' },
  { id: 'torch', name: '火炬之光：无限', icon: '💥', genre: 'ARPG', earnMin: 18, earnMax: 30, difficulty: 2, change: 'up', changeText: '新赛季回暖', verified: '2026-05-13', tags: ['新手友好'], detail: '火炬之光无限对新号友好，装备获取门槛低。刻7-刻8地图产出稳定，配合赛季机制收益可观。单角色日均80-120元，适合碎片化时间搬砖。' },
  { id: 'lostark', name: '失落方舟', icon: '⚓', genre: 'MMORPG', earnMin: 20, earnMax: 35, difficulty: 3, change: 'up', changeText: '新版本回暖', verified: '2026-05-12', tags: ['热门'], detail: '失落方舟通过混沌地牢和星辰守卫副本稳定产出金币。6个角色轮刷的收益最高，日均约150-200元。岛屿任务和航海协作也是不错的额外收人来源。' },
  { id: 'warframe', name: '星际战甲', icon: '🤖', genre: 'TPS', earnMin: 15, earnMax: 28, difficulty: 2, change: 'stable', changeText: '稳定', verified: '2026-05-12', tags: ['自由交易'], detail: 'Warframe拥有完全自由的玩家交易市场。遗物开出的Prime部件和MOD卡是主要搬砖内容。钢铁之路和仲裁任务出产高价值物品，日均80-150元。' },
  { id: 'albion', name: '阿尔比恩', icon: '🛡️', genre: 'Sandbox MMORPG', earnMin: 22, earnMax: 38, difficulty: 3, change: 'up', changeText: '全平台互通', verified: '2026-05-11', tags: ['自由交易'], detail: '阿尔比恩是自由交易程度最高的MMO。采集-制造-销售的完整产业链让搬砖方式多样。红城和黑区的采集收益最高，但风险也大。手机电脑数据互通，随时可搬。' },
  { id: 'osrs', name: 'Old School Runescape', icon: '🎮', genre: 'MMORPG', earnMin: 15, earnMax: 30, difficulty: 2, change: 'stable', changeText: '稳定', verified: '2026-05-10', tags: ['经典'], detail: 'OSRS拥有超20年的稳定经济系统。通过钓鱼、挖矿、伐木等生活技能产出材料出售，或通过Boss战获取稀有掉落。日均收益80-150元，适合挂机搬砖。' },
  { id: 'fifa', name: 'EA FC Online', icon: '⚽', genre: '体育', earnMin: 12, earnMax: 25, difficulty: 3, change: 'down', changeText: '赛季末低谷', verified: '2026-05-09', tags: ['周期性强'], detail: 'EA FC Online通过比赛奖励和转会市场操作赚取金币。赛季初收益最高，赛季末回落。适合对足球游戏熟悉的玩家，转会市场低买高卖需要经验积累。' },
  { id: 'tlbb', name: '天龙八部', icon: '🐲', genre: 'MMORPG', earnMin: 15, earnMax: 28, difficulty: 2, change: 'stable', changeText: '稳定', verified: '2026-05-09', tags: ['经典', '挂机友好'], detail: '天龙八部的自动挂机系统非常适合多开搬砖。野外打怪掉落材料和金币，副本产出装备和元宝道具。5开配置日均收益100-150元，几乎是纯挂机收益。' },
  { id: 'jxsj', name: '剑侠世界3', icon: '🗡️', genre: 'MMORPG', earnMin: 18, earnMax: 30, difficulty: 2, change: 'up', changeText: '新服红利期', verified: '2026-05-08', tags: ['新手友好'], detail: '剑侠世界3的新服红利期明显，开服首月搬砖收益最高。通过日常任务、副本和家族活动获取绑元和流通货币。适合在新区快速升级后投入搬砖。' },
  { id: 'gjjy', name: '光与夜之恋', icon: '💎', genre: '乙女', earnMin: 10, earnMax: 20, difficulty: 1, change: 'stable', changeText: '稳定', verified: '2026-05-08', tags: ['冷门高收益'], detail: '光与夜之恋的账号交易市场活跃，高练度账号可卖数百到数千元。通过每日任务和活动积累资源和限定卡牌，养成后出售账号获利。适合女性玩家入坑。' },
  { id: 'jr', name: '巨人', icon: '🦍', genre: 'MMORPG', earnMin: 20, earnMax: 35, difficulty: 3, change: 'up', changeText: '版本利好', verified: '2026-05-07', tags: ['经典'], detail: '巨人通过军团战和国战获取大量奖励，装备和材料交易市场活跃。投资一定装备基础后，通过帮战和副本稳定产出，日均收益120-180元。' },
  { id: 'tianyu', name: '天谕手游', icon: '☁️', genre: 'MMORPG', earnMin: 15, earnMax: 28, difficulty: 2, change: 'stable', changeText: '稳定', verified: '2026-05-07', tags: ['自由交易'], detail: '天谕手游的自由交易系统支持面对面交易。通过日常副本、首席和研学玩法产出材料和装备。生活技能的产出也有稳定市场，适合休闲搬砖。' },
  { id: 'eod', name: 'EVE Online', icon: '🚀', genre: '太空沙盒', earnMin: 25, earnMax: 50, difficulty: 5, change: 'up', changeText: '市场活跃', verified: '2026-05-06', tags: ['高门槛'], detail: 'EVE Online拥有MMO中最复杂的经济系统。通过采矿、制造、贸易、运输等多种方式赚取ISK。高阶玩家的日均收益可达300元以上，但入门门槛极高，需要大量知识储备。' },
  { id: 'dnfj', name: '大话西游2', icon: '🐒', genre: '回合制', earnMin: 18, earnMax: 32, difficulty: 2, change: 'stable', changeText: '稳定', verified: '2026-05-06', tags: ['经典'], detail: '大话西游2的五环任务和职业任务提供稳定收益。周末活动和节日活动是收益爆发点。多开党通过职业产出和倒卖赚取差价，日均100-180元。' },
  { id: 'mmm', name: 'MIR4', icon: '⚔️', genre: 'MMORPG', earnMin: 12, earnMax: 25, difficulty: 2, change: 'down', changeText: '热度下降', verified: '2026-05-05', tags: ['区块链'], detail: 'MIR4的区块链元素让游戏内资源可直接变现。通过打怪获取DRACO和灵药材料，在交易所出售换取收益。虽然热度较巅峰期下降，但仍有一定搬砖空间。' },
];

const GUIDES = [
  {
    id: 'mhxy-shimen', game: '梦幻西游', title: '梦幻西游 2026 师门搬砖实测：129级五开日入 800W+',
    desc: '师门是梦幻最稳的搬砖基础盘。本文基于129级五开实测数据，详细拆解师门收益、效率优化、成本压缩和防封策略，日均净收益800万梦幻币以上。',
    image: null, date: '2026-05-16', readTime: '10 分钟', views: '18.6k',
    content: [
      { type: 'p', text: '玩梦幻搬砖，师门是风险最低、回报最稳的"基础盘"——不用拼挖宝运气，不用熬夜刷场景，每天花2-3小时，五开129级号稳定产出800-1000万梦幻币。我做了三年师门，踩过买环装被坑、跑路耗时间的坑，现在把最实在的经验揉碎了说。' },
      { type: 'h2', text: '师门收益和等级直接挂钩' },
      { type: 'table', data: { headers: ['等级', '单次现金', '20次总收益', '扣除成本后净收入', '耗时'], rows: [['109级', '2.5万', '50万', '14万', '35分钟'], ['129级', '3-4万', '60-80万', '30万+', '25分钟'], ['144级', '4万', '80万+', '42万', '20分钟'], ['175级', '5万', '100万+', '55万', '18分钟']] } },
      { type: 'p', text: '129级是目前五开师门的最佳性价比区间，收益可观且账号成本适中。144级以上收益更高但账号投入也更大。109级性价比偏低，建议尽快升级到129级。' },
      { type: 'h2', text: '效率核心：把跑路找物时间砍到最少' },
      { type: 'p', text: '师门慢，90%是因为找坐标、买物资耗时间。三个省时间技巧：第一，飞行棋定高频坐标——商会、长安书店、化生寺、大唐官府、朱紫国各定一面，五色旗盒升到三级多定两个点。第二，物资预存——环装用银币自己打造（120级环装成本8万银币+1万制造符，比买成品省3万），烹饪三药五开号互送低品质的。第三，任务顺序优化——先清战斗任务（示威、降服），再做交物品任务（环装、三药），最后做找NPC答题这类轻松活。' },
      { type: 'h2', text: '安全防封：比赚钱更重要的是不被封号' },
      { type: 'p', text: '129级的安全线是单日游戏币产出≤1800万，五开号一天总产出1000万完全在安全范围内。建议用云手机每个号连不同IP，完全规避多开封号风险。不要使用第三方脚本，走官方藏宝阁出金，分散操作、细水长流才是王道。' },
    ]
  },
  {
    id: 'nsh-xinjijie', game: '逆水寒', title: '逆水寒手游 2026 搬砖全攻略：日常+副本+生活技能日入 200+',
    desc: '逆水寒手游经济活跃、氪金大佬多，搬砖路子广。本文从日常一条龙到周本H665，从生活采集到倒卖技巧，全方位拆解日入200+的可执行方案。',
    image: null, date: '2026-05-15', readTime: '12 分钟', views: '14.3k',
    content: [
      { type: 'p', text: '逆水寒手游依旧是搬砖搞钱的热门选择，游戏经济活跃，氪金大佬多，能赚钱的路子也广。新手想做到日入200+不是空谈，关键就在于找对门道。' },
      { type: 'h2', text: '日常一条龙：最稳定的基础收益' },
      { type: 'p', text: '每天上线优先清完日常一条龙——主线、支线、日常副本，流程简单好上手，出百炼装备和紫装的概率很高。老区紫装约2万铜钱（折合1.4元），百炼装备约50万铜钱（约35元）。押镖任务每天两次，每次稳定3万左右铜钱，一周12次必刷。' },
      { type: 'h2', text: '周本H665：收益大头在这里' },
      { type: 'table', data: { headers: ['副本', '类型', '核心产出', '单次价值', '建议'], rows: [['武林风云录', '周本(439)', '百炼令+紫装', '15-20元', '普通难度即可'], ['仗剑行', '周本(439)', '百炼令+寒光令', '10-15元', '必打'], ['江湖风雨事', '周本(439)', '紫装+材料', '10-15元', '必打'], ['舞阳城', '团本H665', '百炼装备+白发', '20-50元', '24万评分以上进']] } },
      { type: 'p', text: '439周本是每周必打的稳定收益来源，团本H665虽然组织成本高但回报可观。新区运气好出白发，价格一千万铜钱左右，折合800元。帮战也必打，四级以上帮会打完保底收益100元，最快十分钟搞定。' },
      { type: 'h2', text: '生活技能与倒卖进阶' },
      { type: 'p', text: '采集类（挖矿、采药、钓鱼）只需要消耗活力，产出在交易行常年供不应求。建议学采矿+制药，红名村区域的云母矿和凝血草是刚需材料，1小时能出8-12组，一组8000铜币。进阶玩法是市场倒卖——装备狗粮、打造材料价格波动大，大版本更新前低价囤货，需求高峰时出手，赚的差价比辛苦刷本快得多。' },
      { type: 'h2', text: '多开与防坑' },
      { type: 'p', text: '一台机器可开6个角色，每个号独立做日常、押镖、副本。但同一个IP下不要超过3个账号在线，不要用第三方多开分身软件。新注册账号先做3天日常升到69级再开始搬砖，让系统判定为正常玩家。零投入也能搬，想提高收益可以开个月卡，不到30块钱每天多领20%铜币。' },
    ]
  },
  {
    id: 'sjz-delta', game: '三角洲行动', title: '三角洲行动跑刀搬砖全攻略：从跑刀仔到日入 200+',
    desc: '三角洲行动是当前搬砖最热的新游。本文从跑刀配装到地图路线，从哈夫币回收到捡漏倒卖，完整拆解0基础到日入200+的进阶路径。',
    image: null, date: '2026-05-16', readTime: '14 分钟', views: '22.1k',
    content: [
      { type: 'p', text: '兄弟，刚入三角洲想赚点奶茶钱甚至房租钱？先从跑刀仔做起，这是新手最稳的第一桶金路数——成本低、风险小，就算落地成盒也不心疼。我当初就是靠这玩法从每局亏20万变成每天稳赚200万+哈夫币。' },
      { type: 'h2', text: '跑刀仔标配：18万成本的秘密' },
      { type: 'table', data: { headers: ['装备', '价格', '作用'], rows: [['破损HO9五级头', '2万', '众生平等，肉伤高'], ['GIR野战胸挂', '1万', '轻便够用'], ['D3战术背包', '5万', '容量适中'], ['最便宜三级甲', '10万', '刚好卡战备线'], ['总计', '18万', '约0.5元人民币']] } },
      { type: 'p', text: '全套成本18万以内，刚好卡着烽火地带的战备线。新手期连续掉5把也只亏90万（按汇率1元≈35万哈夫币，也就2块多）。消音ASH+破损听力四级头+听力针，这套配置主打众生平等，高额的肉伤遇到五套六套也有机会反杀。' },
      { type: 'h2', text: '零号大坝黄金路线：20分钟赚80-150万' },
      { type: 'p', text: '为什么最赚钱的是零号大坝而不是航天？核心就两个词：效率+撤离率。路线：西侧厂房→二楼办公室（必出保险箱）→通风管道→仓库区→撤离点。物资够60万就撤，别贪多。单局20-30分钟稳定赚80-150万，相当于每局2-4元，每天玩4小时奶茶钱直接搞定。' },
      { type: 'h2', text: '进阶技巧：哈夫币倒爷稳赚25%' },
      { type: 'p', text: '简易注射器是官方定价的硬通货（回收价1.2万），但交易行总有人急用钱低价卖9000——蹲点扫货，挂1.1万卖，利润率25%。每天花1小时蹲能赚30-50万。赛季更新前囤弹药更赚：比如新武器AK-12上线前囤7.62mm穿甲弹，版本更新后价格从1.5万涨到2.5万每发。' },
      { type: 'h2', text: '变现渠道与回收比例' },
      { type: 'p', text: '当前第三方合规回收汇率：纯币1:34.8-1:36.5，九格满体1:37-1:39。推荐跑刀积累本金→交易行低买高卖→特勤处制造热门弹药出售。注意远离黑币陷阱，低于市场价太多的哈夫币几乎都是外挂刷的。' },
    ]
  },
  {
    id: 'mhxy-wukai', game: '梦幻西游', title: '梦幻西游五开搬砖终极攻略：低成本高收益配置方案',
    desc: '五开是梦幻搬砖的终极形态。本文分享129级221组合的低成本配置，从买号到日常任务四件套，从活力变现到安全防封，月入5000+的可执行方案。',
    image: null, date: '2026-05-15', readTime: '15 分钟', views: '28.4k',
    content: [
      { type: 'p', text: '作为玩了五年梦幻的老搬砖人，多开踩过的坑能写本小册子——从新区挤破头抢星宿的崩溃，到五开手机发烫闪退的绝望，再到现在稳定月入5000的养老状态。今天把压箱底的多开攻略掏出来，都是能落地的实在招。' },
      { type: 'h2', text: '买号比练号香10倍' },
      { type: 'table', data: { headers: ['方案', '等级', '组合', '单号成本', '五开总价', '回本周期'], rows: [['新手入门', '129级', '1无底洞+4女儿村', '800-1000元', '4000-5000元', '3个月'], ['进阶配置', '129级', '221（2无底+2女儿+1地府）', '1200-1500元', '6000-7500元', '3-4个月'], ['高端五门', '175级', '化生+女儿+龙宫+神木+大唐', '3000-5000元', '15000-25000元', '4-6个月']] } },
      { type: 'p', text: '新手优先选129级1无底洞+4女儿村组合，总价4000-5000元，三个月就能回本（每天8小时）。别练号！练号等于浪费时间加钱——我当初自己练69级大唐花了2个月，买装备花了800块，结果任务还没别人成品号快。藏宝阁买成品是最划算的选择。' },
      { type: 'h2', text: '每天必做固定收益——像领底薪一样稳' },
      { type: 'p', text: '师门任务：每个号每天20次，提前备好转生丹、环装，单号赚30万。大小鬼一起抓30对，每对赚5万，还能出4件环装（卖商店20万）。宝图任务每个号每天50次，出15张左右——别挖！新手挖图大概率亏，直接卖每张10万。副本黄金三连：乌鸡国跳过小妖省8分钟，必得种子+50万；石猴授徒走穿山甲路线15分钟通关，有概率出特赦令牌卖100万+；金兜洞守天将掉金丹+树苗，单号赚45万。' },
      { type: 'h2', text: '活力变现：别让隐形钱跑了' },
      { type: 'p', text: '女儿村/无底洞学140级烹饪，卖高品豆斋果每个3万，单日赚30万；或学130级炼药，炼九转回魂丹每个8万。如果有龙宫/方寸号，卖伤害符/命中符，周末活动前单价翻一倍。每天固定6-8小时，别贪多，稳扎稳打。前三个月先把基础任务做好，三个月后再研究倒卖。' },
    ]
  },
  {
    id: 'wow-classic', game: '魔兽世界', title: '魔兽世界怀旧服搬砖全攻略：单刷+双采集日入 200+',
    desc: '怀旧服搬砖稳定且持久。本文覆盖双采集专业收益、SS/TK等单刷副本路线、G团打工以及怀旧服TBC各阶段收益变化，适合散人搬砖玩家。',
    image: null, date: '2026-05-14', readTime: '10 分钟', views: '13.7k',
    content: [
      { type: 'p', text: '魔兽世界怀旧服拥有成熟的GKP金币体系和稳定的玩家群体。虽然不像新游那样有爆发期，但胜在稳定持久。从双采集到单刷副本，从G团打工到制造专业，每种玩法都有稳定的收益。' },
      { type: 'h2', text: '双采集专业收益排行' },
      { type: 'table', data: { headers: ['专业组合', '推荐地图', '时薪', '难度', '特点'], rows: [['采药+挖矿', '东瘟疫之地', '25-35元', '低', '最稳，双收益'], ['采药+剥皮', '希利苏斯', '20-30元', '低', '怪多材料多'], ['挖矿+工程', '燃烧平原', '30-40元', '中', '能自保'], ['附魔+裁缝', '主城', '20-35元', '中', '需要本金']] } },
      { type: 'p', text: '双采集是门槛最低的搬砖方式，不需要装备基础。推荐东瘟疫之地（富瑟银矿+山鼠草/梦叶草/黑莲花），每小时收益25-35元。注意：黑莲花刷新点竞争激烈，建议凌晨或清早去采，避开高峰期。' },
      { type: 'h2', text: '单刷副本收益对比' },
      { type: 'p', text: '斯坦索姆（正义宝珠+布料）：法师/圣骑士单刷，时薪25-35元。通灵学院（符文布+附魔材料）：法师/术士，时薪20-28元。玛拉顿（元素之土）：猎人单刷，时薪18-25元。祖尔法拉克（硬币+宝石）：法师AOE，时薪18-25元。推荐法师首发，AOE刷怪效率最高，斯坦索姆是单刷首选。' },
      { type: 'h2', text: 'G团打工与制造业' },
      { type: 'p', text: 'KLZ/ZAM/Gruul等G团打工，有装备基础的号每次可分500-2000G。制造业方面，推荐附魔+裁缝组合，材料成本低、利润稳定，高级附魔和魔化灵纹套是热销产品。月布包也是稳定收入来源，材料成本50G，成品卖100-120G。' },
    ]
  },
  {
    id: 'poe2-league', game: '流放之路', title: '流放之路2 赛季初搬砖攻略：开荒到日入 300+',
    desc: '赛季初是搬砖的黄金期。从开荒路线到装备筛选，再到通货积累，本文详细拆解赛季初如何快速建立搬砖体系。',
    image: null, date: '2026-05-13', readTime: '15 分钟', views: '20.3k',
    content: [
      { type: 'p', text: '流放之路2新赛季开启，这是搬砖玩家最期待的时期。赛季初的通货价格最高，掌握正确的开荒策略可以让你在一周内建立稳定的搬砖体系。' },
      { type: 'h2', text: '赛季时间线收益规划' },
      { type: 'table', data: { headers: ['时间段', '核心目标', '预估日收益', '关键行动'], rows: [['第1-3天', '通关剧情到异界T5', '50-80元', '速刷升级+积累基础通货'], ['第4-7天', '异界T10+积累通货', '150-200元', '地图仪+六分仪策略'], ['第2周', 'Boss farm+制作', '200-300元', '守卫/塑界者+工艺出售'], ['第3周+', '高端策略+镜子装备', '300-500元', '百亢图/5军/深度矿坑']] } },
      { type: 'p', text: '赛季第一周是最大的收益窗口，通货价格最高。建议请假3天全力开荒。第一天通关剧情，第二天进入异界地图，第三天开始高效产出。' },
      { type: 'h2', text: '装备筛选与出售技巧' },
      { type: 'p', text: '使用高级拾取过滤器，只拾取有价值物品。装备筛选优先级：6洞装备>品质宝石>地图>通货>首饰基底。利用Awakened POE Trade快速估价，熟悉热门BD装备需求。批量出售比单件出售效率高5-10倍。' },
    ]
  },
  {
    id: 'newbie-guide', game: '综合', title: '新手搬砖入门完全指南：从零到日入 100+ 的完整路径',
    desc: '零基础入门搬砖的全流程指南，从搬砖概念、游戏选择、账号准备到出金渠道，适合完全零基础的新手阅读。',
    image: null, date: '2026-05-12', readTime: '20 分钟', views: '42.8k',
    content: [
      { type: 'p', text: '很多新手看到"搬砖日入两三百"的说法，自己上手连点卡钱都赚不回来，要么踩了账号封禁的坑，要么不知道新版本哪些材料值钱。作为常年蹲在各大游戏里摸收益的老玩家，今天从零讲起，新手也能直接套用。' },
      { type: 'h2', text: '新手推荐游戏对比' },
      { type: 'table', data: { headers: ['游戏', '门槛', '时薪', '出金渠道', '封号风险', '推荐指数'], rows: [['梦幻西游', '低', '22-38元', '藏宝阁', '极低', '⭐⭐⭐⭐⭐'], ['逆水寒手游', '低', '28-45元', '藏宝阁/交易行', '低', '⭐⭐⭐⭐⭐'], ['三角洲行动', '中', '35-60元', '第三方回收', '中', '⭐⭐⭐⭐'], ['火炬之光无限', '低', '18-30元', '交易平台', '低', '⭐⭐⭐⭐'], ['DNF', '中', '18-32元', '拍卖行', '中', '⭐⭐⭐'], ['魔兽世界怀旧服', '中', '20-35元', 'G团/交易平台', '低', '⭐⭐⭐']] } },
      { type: 'p', text: '新手首选梦幻西游或逆水寒手游，经济系统成熟、出金渠道正规、封号风险低。先选一款游戏专注玩透，熟练后再拓展。不建议一开始就多开，先单开跑通全流程。' },
      { type: 'h2', text: '避坑指南：新手最容易犯的5个错误' },
      { type: 'p', text: '第一，一上来就开五六个号。同一个IP下不要超过3个号，否则容易被系统判定为工作室。第二，不养号直接搬。新注册账号先做3天日常任务，升到合理等级再开始产出金，让系统判定为正常玩家。第三，用第三方脚本。目前官方查得非常严，封了就是归零。第四，游戏内喊话卖金。这属于违规行为，容易被举报封号。第五，不分散出金。所有金币集中在一个号上出，一旦被查血本无归。' },
      { type: 'h2', text: '出金渠道与安全建议' },
      { type: 'p', text: '网易系游戏（梦幻、逆水寒）走官方藏宝阁最安全，虽然抽成5%，但零封号风险。其他游戏推荐5173、DD373、G2G等平台。单日出金控制在500元以内。不要存金币，赚到一定量就出手。保留交易记录截图，出现纠纷有据可查。最重要的一条：心态放平，搬砖是细水长流的副业，不是一夜暴富的捷径。' },
    ]
  },
  {
    id: 'dnf-fengbao', game: 'DNF', title: 'DNF 2026 风暴航路 vs 未央幻境：搬砖地图选择与收益实测',
    desc: '2026年新春版本更新后搬砖格局洗牌。本文实测对比风暴航路、未央幻境、贵族机要三大地图的真实收益，帮你找到最适合自己的搬砖方案。',
    image: null, date: '2026-05-11', readTime: '12 分钟', views: '19.8k',
    content: [
      { type: 'p', text: '2026年新春版本更新后，搬砖格局早已洗牌。那些还在死守风暴航路的玩家，可能正把每小时500万金币的收益拱手让人。现版本搬砖呈现"一超两强"格局：风暴航路稳定但天花板低，未央幻境指数级爆发但看脸，贵族机要周期性波动。' },
      { type: 'h2', text: '三大地图收益实测对比' },
      { type: 'table', data: { headers: ['地图', '名望要求', '角色耗时', '收益/角色', '风险等级', '适合人群'], rows: [['风暴航路', '4.2万+', '8-10分钟', '280-320万金币', '低', '多号党稳定流'], ['未央幻境', '5万+', '不定', '150万-上亿', '高', '单号搏上限'], ['贵族机要', '4万+', '10分钟', '150万+材料', '中', '时间碎片化']] } },
      { type: 'p', text: '追求稳定选风暴航路，4.2万名望左右，每天2小时月入2.5亿金币。赌狗体质选未央幻境，5万名望以上每天3小时月入3-8亿金币（波动大）。时间碎片化选贵族机要，每天30分钟月入1.5亿金币。建议搭配：4个风暴主号+2个未央赌狗号。' },
      { type: 'h2', text: '风暴航路效率优化技巧' },
      { type: 'p', text: '名望值4.5万以上时，精英怪掉落增幅书几率提升3.2倍。推荐大天域特效流装备+自动拾取宠物，单角色刷图时间压缩至15分钟内。路线优化：走上下双路线、跳过第三图精英怪（血厚收益低），可节省40秒。堇青石别直接扔拍卖，周二周五晚上8-10点价格最高，囤到此时段出售。' },
      { type: 'h2', text: '多角色管理最佳实践' },
      { type: 'p', text: '同一账号下6个角色为最佳，再多时间管理成本剧增。每天搬4个角色约2小时性价比最高，超过6个角色后收益时间比下降40%。记得开黑钻+自动修理+黄金卡牌——这是搬砖基础配置，月卡成本约2000万金币，日均收益提升30%以上。按当前金币比例1:65，时薪约25-30元。' },
    ]
  },
  {
    id: 'nsh-richang', game: '逆水寒', title: '逆水寒手游日常任务效率排行：必做 vs 可跳过全指南',
    desc: '逆水寒日常任务种类繁多，不是所有都值得做。本文按时间效率排序，从必做任务到可选副本，帮你找到收益最大化的日常路线。',
    image: null, date: '2026-05-10', readTime: '8 分钟', views: '10.5k',
    content: [
      { type: 'p', text: '逆水寒手游日常任务体系庞大，每天全部做完需要3-4小时。但作为搬砖玩家，只需要做收益最高的几个任务即可。本文实测整理了所有日常任务的真实收益数据，帮你把时间花在刀刃上。' },
      { type: 'h2', text: '日常任务效率排行' },
      { type: 'table', data: { headers: ['任务', '耗时', '单次收益', '时薪', '优先级'], rows: [['押镖', '10分钟', '3万铜钱', '18-24元', '⭐⭐⭐必做'], ['帮会任务', '10分钟', '3-5元', '18-30元', '⭐⭐⭐必做'], ['生活采集', '20分钟', '8-12元', '24-36元', '⭐⭐⭐必做'], ['名捕震关东', '15分钟', '4-6元', '16-24元', '⭐⭐推荐'], ['混江湖', '15分钟', '3-5元', '12-20元', '⭐⭐推荐'], ['挖宝', '10分钟', '2-5元', '12-30元', '⭐看脸'], ['闲趣', '20分钟', '3-4元', '9-12元', '⭐可跳过']] } },
      { type: 'p', text: '推荐高效路线：押镖→帮会任务→生活采集→名捕震关东，总耗时约55分钟，日均收益18-33元。周末额外完成帮战和联赛，保底收益100元。439周本（武林、仗剑、江湖风雨事）每周必打，产出百炼令和紫装。' },
      { type: 'h2', text: '生活技能收益最大化' },
      { type: 'p', text: '采矿/采药每小时收益约15-20元，制药/烹饪每小时20-30元（需要和药方+熟练度）。推荐采矿+制药组合，红名村区域的云母矿和凝血草是刚需材料。摆摊技巧：在人流量大的主城摆摊，参考交易行当前市价，略低于最高价以快速出货。资金周转率比单件多赚几万更重要。' },
    ]
  },
  {
    id: 'delta-quanyy', game: '三角洲行动', title: '三角洲行动全地图收益排名与跑刀路线大全',
    desc: '三角洲行动6张地图各有优劣。本文从收益、风险、装备需求三个维度全面评估，并给出每张地图的最佳跑刀路线和撤离策略。',
    image: null, date: '2026-05-09', readTime: '12 分钟', views: '16.8k',
    content: [
      { type: 'p', text: '三角洲行动不同地图的收益曲线和风险等级各不相同。选择适合自己打法的地图，是提高搬砖效率的关键。从跑刀仔到全装猛攻，每张地图都有最适合的配装和路线。' },
      { type: 'h2', text: '地图综合评分与路线推荐' },
      { type: 'table', data: { headers: ['地图', '时薪', '风险', '装备需求', '推荐路线', '分值'], rows: [['零号大坝', '35-60元', '中', '3级+消音', '水泥厂→地下金库→撤离', '⭐⭐⭐⭐⭐'], ['长弓溪谷', '30-50元', '中', '3级装备', '鸟窝隐藏→撤离点', '⭐⭐⭐⭐'], ['航天基地', '40-70元', '极高', '5级装备', '宿舍区保险柜→中控', '⭐⭐'], ['河谷', '25-45元', '高', '4级装备', '外围资源点→撤离', '⭐⭐⭐'], ['巴克什', '20-40元', '高', '4级装备', '边缘收集→快速撤', '⭐⭐⭐'], ['阿萨拉', '15-30元', '低', '2级装备', '全图搜刮', '⭐⭐⭐']] } },
      { type: 'p', text: '零号大坝综合最优：收益高、风险可控、装备需求低。新手核心路线：水泥厂→地下金库必刷保险箱，大坝22号协议箱固定出金，单趟收益80-150万。航天基地收益天花板最高但需要顶级装备，不推荐新手尝试。' },
      { type: 'h2', text: '赛季策略与变现时机' },
      { type: 'p', text: '赛季初哈夫币比例最低（币价最贵），适合出售哈夫币。赛季末玩家集中变现，币价最便宜，适合买入。记得买保险箱！哪怕是氪金买2x2或3x3，几天就能把成本赚回来，保证每局都有低保。不要碰绝密巴克什——没解锁乌鲁鲁干员前打高难度局是纯粹送钱。' },
    ]
  },
  {
    id: 'eve-mining', game: 'EVE', title: 'EVE Online 新手致富全攻略：采矿+行星开发+市场倒卖',
    desc: 'EVE的经济系统是MMO中最复杂的。本文从零开始讲透三种最稳的赚钱方式——高安采矿、行星开发躺赚、市场贸易套利，新手也能月入千万ISK。',
    image: null, date: '2026-05-08', readTime: '20 分钟', views: '9.8k',
    content: [
      { type: 'p', text: '在EVE浩瀚的星海中，每个新手舰长都曾有过这样的经历：驾驶着初始护卫舰探索低安星域，一艘隐轰的跃迁锁定，3秒后被摧毁。2026年Q1数据显示，新手平均首爆时间仅12小时。想要在这片由玩家主导的宇宙中生存并崛起，你需要一套"新手生存算法"。' },
      { type: 'h2', text: '方法一：高安安全任务——最稳的起步方式' },
      { type: 'p', text: '完成教程任务获取免费启动资金后，在高安区执行代理人任务。一级任务单趟8-15万ISK，每天5个任务约80-150万ISK。关键是完成10个安全任务可解锁星域安全等级+0.05，大幅降低被攻击概率。使用Venture级采矿船配T1矿枪，每小时采集矿石价值约50万ISK。矿石不要精炼——新手精炼技能不足会损耗很多，直接卖原石。' },
      { type: 'h2', text: '方法二：行星开发——睡着也在赚钱' },
      { type: 'table', data: { headers: ['开发路线', '门槛', '日收益', '维护时间', '推荐'], rows: [['矿石富集区→提炼→组件', '行星开发4级', '140万ISK/天', '5分钟/天', '⭐⭐⭐⭐⭐'], ['稀土矿带→纳米涂层', '行星开发3级', '50-120万/天', '3分钟/天', '⭐⭐⭐⭐'], ['基础补给品生产', '行星开发2级', '30-50万/天', '2分钟/天', '⭐⭐⭐']] } },
      { type: 'p', text: '行星开发是EVE独有的睡后收入。在高安星域寻找资源富集行星，设置矿石富集区→基础提炼厂→组件装配站三步流水线，12小时自动运转。开采2颗星球24小时收入可达140万ISK，搭配手机APP远程监控功能，5分钟上线收一次菜。' },
      { type: 'h2', text: '方法三：市场倒卖——信息差就是利润' },
      { type: 'p', text: '新手只需要5000万ISK本金，在吉他市场和次级贸易中心之间倒卖T2无人机或弹药。根据市场历史数据工具观察价格走势，找那些价格波动大、日均交易量高的物品。战争频发时期，某些型号的导弹在前线星系价格会飙升20-30%，从后方批量进货定点投放可实现低风险快速套利。' },
    ]
  },
  {
    id: 'torch-new', game: '火炬之光', title: '火炬之光无限新赛季搬砖攻略：从开荒到刻8速刷',
    desc: '火炬之光无限是最适合新手的ARPG搬砖游戏。本文从赛季开荒路线到刻8速刷配置，从触媒机制到装备筛选，完整拆解搬砖全流程。',
    image: null, date: '2026-05-07', readTime: '10 分钟', views: '12.6k',
    content: [
      { type: 'p', text: '火炬之光无限是当前最适合新手的ARPG搬砖游戏。装备门槛低、赛季机制简单、交易市场活跃。2026新赛季开启后搬砖热度再次攀升，刻7-刻8成为主要搬砖地图。' },
      { type: 'h2', text: '刻7到刻8收益对比与配置门槛' },
      { type: 'table', data: { headers: ['地图', '装备门槛', '通关时间', '稳定时薪', '赛季机制收益', '推荐'], rows: [['刻7', 'T1火/冰', '8-10分钟', '15-20元', '+3-5元', '新手首选'], ['刻8普通', 'T2火/冰', '10-12分钟', '20-28元', '+5-8元', '进阶'], ['刻8腐蚀', 'T3+', '12-15分钟', '28-35元', '+8-12元', '高手'], ['刻8深空', 'T4+', '15-20分钟', '35-50元', '+10-15元', '顶级']] } },
      { type: 'p', text: '新手打到刻7即可开始搬砖，凑齐T1装备后转型刻8普通。赛季机制（触媒/信标）是额外收益的核心，每张赛季机制图平均多产出5-10元。推荐召唤1或冰焰术士作为首发职业，装备便宜、操作简单、刷图效率高。' },
      { type: 'h2', text: '装备筛选与交易技巧' },
      { type: 'p', text: '使用高级拾取过滤器只拾取有价值的装备。重点捡拾：高阶装备基底、技能等级+1的词条装备、暴击/暴伤词条首饰。火炬的交易行支持一口价和竞拍两种模式，建议热门装备（如毕业武器、核心传奇）挂竞拍，普通装备挂一口价快速回笼资金。赛季前两周是收益黄金期，通货价格最高，建议集中出货。' },
    ]
  },
  {
    id: 'albion-guide', game: '阿尔比恩', title: '阿尔比恩搬砖三种路线实测：采集、制造、贸易哪个最赚？',
    desc: '阿尔比恩的自由经济体系提供了多样化的搬砖选择。本文从黄区采集到黑区冒险，从制造到倒卖，用实测数据告诉你每种路线一个月能赚多少。',
    image: null, date: '2026-05-06', readTime: '15 分钟', views: '10.2k',
    content: [
      { type: 'p', text: '阿尔比恩的自由经济体系为搬砖玩家提供了多样化的选择。和传统MMO不同，阿尔比恩的装备、材料、资源全部由玩家生产，经济机会充足。装备会消耗，资源会消耗，这意味着搬砖市场永远有需求。' },
      { type: 'h2', text: '三大路线月收益实测' },
      { type: 'table', data: { headers: ['路线', '门槛', '日均收益', '月收益', '风险', '适合人群'], rows: [['黄区采集', 'T5采集工具', '15-25元', '450-750元', '极低', '新手/稳健派'], ['红区采集', 'T6+采集工具', '25-40元', '750-1200元', '高', '操作派'], ['制造（消耗品）', '专精等级', '20-35元', '600-1050元', '低', '数据派'], ['贸易倒卖', '50万本金', '30-50元', '900-1500元', '中', '市场派'], ['黑区采集', 'T7+装备', '40-60元', '1200-1800元', '极高', '高手']] } },
      { type: 'p', text: '新手推荐从黄区采集开始，安全稳定。熟悉市场行情后转制造或贸易。红区采集收益高但风险也大，建议穿便宜装备出行。制造需要研究市场热销品类，推荐从食物和药水这类消耗品开始。' },
      { type: 'h2', text: '进阶技巧：手机随时搬砖' },
      { type: 'p', text: '阿尔比恩最大的优势是手机电脑数据互通。利用手机版可以随时随地采集，通勤路上、午休时间都能打开收菜。推荐手机端做采集（操作简单），电脑端做贸易（需要多窗口对比价格）。如果你每天有2-3小时碎片时间，阿尔比恩是最适合的搬砖游戏。' },
    ]
  },
  {
    id: 'tlbb-setup', game: '天龙八部', title: '天龙八部2026搬砖全攻略：单开+多开收益深度实测',
    desc: '天龙八部怀旧服搬砖依然能赚。本文从门派选择、手工装备打造、日常副本收益到多开配置，完整拆解单开月入过千的实战方案。',
    image: null, date: '2026-05-05', readTime: '12 分钟', views: '8.9k',
    content: [
      { type: 'p', text: '天龙八部虽然是一款老游戏，但经济系统依然健康，玩家基数庞大。2026年Q1数据显示怀旧服道具交易活跃度提升了12.5%。只要找对门路，单账号月产出依然可观。峨眉派是单开搬砖首选——奶妈永远是副本刚需，进组门槛低，还省药钱。' },
      { type: 'h2', text: '单开收益拆解：日均20-30元' },
      { type: 'table', data: { headers: ['项目', '耗时', '收益', '备注'], rows: [['跑环任务', '1.5小时', '50-80万金币', '约5-8元'], ['刷反贼×3', '40分钟', '铜币+杂物', '约2-3元'], ['四绝庄+燕子坞', '1小时', '玄天寒石+宝石', '约10-15元'], ['生活技能采集', '10分钟', '药材/矿石', '约5元'], ['捉兽洗练', '20分钟', '珍兽出售', '约0-10元'], ['总计', '约4小时', '净收益', '约20-30元/天']] } },
      { type: 'p', text: '单开每天投入3-4小时，月入600-900元。如果双开或五开，利用小号养大号的模式收益翻倍。宝石镶嵌采用3+4混搭策略（关键部位4级，次要3级），性价比最高。装备以手工紫武为核心，80%预算花在武器上，防具混搭加身法体力即可。' },
      { type: 'h2', text: '防坑与出金建议' },
      { type: 'p', text: '不要使用第三方宏，物理按键模拟器也不要24小时挂机。遇到大型活动时金币产出量大增，建议囤积材料等活动结束后金价回升再出手。收益优先兑换成硬通货（宝石、高级材料、珍兽），抗通胀能力比存金币强。四绝庄产出的玄天寒石和新莽神符是硬通货，永远不愁卖。' },
    ]
  },
  {
    id: 'dnfj-wuhuan', game: '大话西游2', title: '大话西游2五开零氪搬砖攻略：平民阵容日入 100+',
    desc: '大话西游2运营超20年经济系统依然稳定。本文分享零氪五开的阵容搭配、日常收益拆解和职业产出方案，不投一分钱也能月入过千。',
    image: null, date: '2026-05-04', readTime: '10 分钟', views: '7.2k',
    content: [
      { type: 'p', text: '大话西游2虽然是一款运营超过20年的老游戏，但其经济系统依然稳定。零氪五开完全可行——我自己2026年2月回流，前期只花了40多块钱买基础大话币凑装备，每天抽2-3小时刷日常，一周产出约3亿大话币，折合300多块，除掉月卡每月稳定剩一千多。' },
      { type: 'h2', text: '零氪五开阵容推荐' },
      { type: 'table', data: { headers: ['种族', '路线', '核心要求', '预估成本', '作用'], rows: [['男鬼', '血法', '三尸伤害2000+', '500万大话币', '核心容错'], ['男人', '敏血', '强混15+', '300万大话币', '控制'], ['男魔', '全敏', '强抽20+', '200万大话币', '辅助输出'], ['女魔', '全敏', '强抽20+', '200万大话币', '辅助输出'], ['仙族', '克炮', '强法40/克50', '400万大话币', '核心输出']] } },
      { type: 'p', text: '这套阵容总成本不超过50元人民币，适配几乎所有搬砖场景——修罗、域外风情、周末任务都能打。起号流程：做主线升50级→宫廷任务攒师门→100级刷修罗→142级开生产职业。全部零氪，产出的大话币完全够抵扣点卡。' },
      { type: 'h2', text: '日收益拆解与进阶' },
      { type: 'p', text: '五环任务每天20分钟赚8-10元，职业任务30分钟赚10-15元。大雁塔每周产出约9100万大话币，竹子任务4600万，帮派成就2100万。日常产出加上周末活动，五开日均收益80-150元。如果想赚更多，推荐种植或畜牧职业，挂机产出材料卖给王元宝，属于被动收入。' },
    ]
  },
];

const PLATFORMS = [
  { id: 'dd373', name: 'DD373', desc: '老牌游戏交易平台，支持多款游戏金币/账号交易，安全快捷', icon: 'D', color: '#e74c3c', features: ['多游戏支持', '安全担保交易', '客服响应快'], rating: 4.5 },
  { id: '5173', name: '5173', desc: '国内最大游戏交易平台，覆盖主流游戏，手续费低至2%', icon: '5', color: '#3498db', features: ['用户量大', '手续费低', '提现快'], rating: 4.3 },
  { id: 'g2g', name: 'G2G', desc: '全球化游戏交易市场，支持多币种结算，适合国际玩家', icon: 'G', color: '#2ecc71', features: ['国际化平台', '多币种结算', '买家群体大'], rating: 4.2 },
  { id: 'c5game', name: 'C5Game', desc: '专业游戏饰品交易平台，支持 Steam 游戏道具交易', icon: 'C', color: '#9b59b6', features: ['饰品交易', 'Steam 对接', '实时报价'], rating: 4.0 },
  { id: 'igxe', name: 'IGXE', desc: '全球游戏饰品交易平台，支持多种电竞游戏道具交易', icon: 'I', color: '#f39c12', features: ['电竞游戏', '库存大', '交易速度快'], rating: 4.1 },
  { id: 'buff', name: 'BUFF', desc: '网易旗下游戏交易平台，支持逆水寒、梦幻西游等网易游戏', icon: 'B', color: '#1abc9c', features: ['网易官方', '安全可靠', '到账快'], rating: 4.4 },
];

// ======================== APP STATE ========================

const state = {
  currentPage: 'home',
  currentGuide: null,
  calcGameIndex: 0,
  calcHours: 4,
  guideFilter: 'all',
  rankingSort: 'earnings',
  gamesFilter: 'all',
};

const gameColors = [
  '#e74c3c', '#3498db', '#f39c12', '#2ecc71', '#9b59b6',
  '#1abc9c', '#e67e22', '#34495e', '#16a085', '#c0392b',
  '#2980b9', '#8e44ad',
];

// ======================== ROUTER ========================

function navigate(hash) {
  const cleanHash = hash.replace('#', '') || 'home';

  if (cleanHash.startsWith('guide/')) {
    const guideId = cleanHash.replace('guide/', '');
    const guide = GUIDES.find(g => g.id === guideId);
    if (guide) {
      state.currentGuide = guide;
      switchPage('guide-detail');
      renderGuideDetail(guide);
      return;
    }
  }

  if (cleanHash.startsWith('game/')) {
    const gameName = cleanHash.replace('game/', '');
    const game = GAMES.find(g => g.name === gameName);
    if (game) {
      const filtered = GUIDES.filter(g => g.game === gameName || gameName.includes(g.game));
      state.gamesFilter = gameName;
      switchPage('guides');
      renderGuidesPage(filtered, gameName);
      return;
    }
  }

  const validPages = ['home', 'rankings', 'games', 'guides', 'platforms', 'about'];
  const page = validPages.includes(cleanHash) ? cleanHash : 'home';
  state.currentPage = page;
  switchPage(page);
  updateActiveNav(page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchPage(pageId) {
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
    p.style.display = 'none';
  });
  const page = document.getElementById('page-' + pageId);
  if (page) {
    page.classList.add('active');
    page.style.display = 'block';
  }
}

function updateActiveNav(page) {
  document.querySelectorAll('.nav-link').forEach(el => {
    el.classList.toggle('active', el.getAttribute('href') === '#' + page);
  });
  document.querySelectorAll('.mobile-nav-link').forEach(el => {
    el.classList.toggle('active', el.getAttribute('href') === '#' + page);
  });
  closeMobileMenu();
}

// Handle hash changes & initial load
window.addEventListener('hashchange', () => navigate(window.location.hash));
window.addEventListener('load', () => {
  navigate(window.location.hash || '#home');
  initApp();
});

// ======================== RENDERERS ========================

function renderStars(count) {
  return Array.from({ length: 5 }, (_, i) =>
    `<span class="star ${i < count ? '' : 'empty'}">★</span>`
  ).join('');
}

function getEarnText(game) {
  return `¥${game.earnMin}-${game.earnMax}`;
}

function getDifficultyText(d) {
  const labels = ['', '新手友好', '简单', '中等', '困难', '极高'];
  return labels[d] || '中等';
}

function getChangeIcon(change) {
  return { up: '📈', down: '📉', stable: '→' }[change] || '';
}

// ---- Rankings Preview ----
function renderRankingsPreview() {
  const el = document.getElementById('rankingsPreview');
  const sorted = [...GAMES].sort((a, b) => (b.earnMax + b.earnMin) - (a.earnMax + a.earnMin));
  el.innerHTML = sorted.slice(0, 6).map((game, i) => `
    <div class="ranking-item" onclick="navigate('#game/${game.name}')">
      <span class="ranking-number">${i + 1}</span>
      <div class="ranking-info">
        <div class="ranking-name">
          ${game.icon} ${game.name}
          <span class="ranking-tag">${game.genre}</span>
        </div>
        <div class="ranking-meta">${getDifficultyText(game.difficulty)} · ${game.tags.slice(0, 2).join(' · ')}</div>
      </div>
      <div class="ranking-stars">${renderStars(game.difficulty)}</div>
      <div class="ranking-earnings">
        <span class="earning-amount">${getEarnText(game)}</span>
        <span class="earning-label">时薪范围</span>
      </div>
      <span class="ranking-change ${game.change}">${getChangeIcon(game.change)} ${game.changeText}</span>
    </div>
  `).join('');
}

// ---- Game Grid ----
function renderGameGrid(filter) {
  const el = document.getElementById('gameGrid');
  const filtered = filter && filter !== 'all' ? GAMES.filter(g => g.name === filter || g.tags.includes(filter)) : GAMES;
  el.innerHTML = filtered.map(game => `
    <div class="game-card" onclick="navigate('#game/${game.name}')">
      <span class="game-card-icon">${game.icon}</span>
      <div class="game-card-name">${game.name}</div>
      <div class="game-card-genre">${game.genre}</div>
      <div class="game-card-earnings">${getEarnText(game)} <span>/时</span></div>
      <div class="game-card-stars">${renderStars(game.difficulty)}</div>
      <div class="game-card-data">数据验证于 ${game.verified}</div>
    </div>
  `).join('');
}

// ---- Guide Grid ----
function renderGuideGrid(filter) {
  const el = document.getElementById('guideGrid');
  const filtered = filter === 'all' ? GUIDES : GUIDES.filter(g => g.game === filter || filter.includes(g.game) || g.game.includes(filter));

  if (filtered.length === 0) {
    el.innerHTML = `<div class="empty-state"><div class="empty-state-icon">📝</div><div class="empty-state-text">暂无私攻略</div></div>`;
    return;
  }

  el.innerHTML = filtered.map(guide => {
    const colors = ['#e74c3c', '#3498db', '#f39c12', '#2ecc71', '#9b59b6'];
    const bgColor = colors[Math.floor(Math.random() * colors.length)];
    const hasPage = ['mhxy-shimen','sjz-delta','nsh-xinjijie','newbie-guide','mhxy-wukai','poe2-league'].includes(guide.id);
    const href = hasPage ? `guides/${guide.id}.html` : `#guide/${guide.id}`;
    return `
    <a href="${href}" class="guide-card" onclick="if(!event.ctrlKey&&!event.metaKey){event.preventDefault();navigate('#guide/${guide.id}')}">
      <div class="guide-card-image" style="background: linear-gradient(135deg, ${bgColor}, ${bgColor}88);">
        <div class="guide-tags">
          <span class="guide-tag">${guide.game}</span>
          <span class="guide-tag">最新</span>
        </div>
      </div>
      <div class="guide-card-body">
        <div class="guide-card-title">${guide.title}</div>
        <div class="guide-card-desc">${guide.desc}</div>
        <div class="guide-card-footer">
          <span>📅 ${guide.date}</span>
          <span>⏱ ${guide.readTime}</span>
          <span>👁 ${guide.views}</span>
        </div>
      </div>
    </a>
  `}).join('');
}

// ---- Calculator ----
function renderCalculator() {
  const el = document.getElementById('calcOptions');
  el.innerHTML = GAMES.map((g, i) =>
    `<div class="calc-option" data-index="${i}">${g.icon} ${g.name} (¥${g.earnMin}-${g.earnMax}/小时)</div>`
  ).join('');

  el.addEventListener('click', (e) => {
    const option = e.target.closest('.calc-option');
    if (!option) return;
    const idx = parseInt(option.dataset.index);
    state.calcGameIndex = idx;
    const game = GAMES[idx];
    document.querySelector('.calc-selected').textContent = `${game.icon} ${game.name} (¥${game.earnMin}-${game.earnMax}/小时)`;
    document.querySelector('.calc-select').classList.remove('open');
    updateCalcResult();
  });

  const select = document.querySelector('.calc-selected');
  select.addEventListener('click', () => {
    document.querySelector('.calc-select').classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.calc-select')) {
      document.querySelector('.calc-select')?.classList.remove('open');
    }
  });

  const slider = document.getElementById('calcHours');
  slider.addEventListener('input', () => {
    state.calcHours = parseInt(slider.value);
    document.getElementById('calcHoursDisplay').textContent = state.calcHours + ' 小时';
    updateCalcResult();
  });

  updateCalcResult();
}

function updateCalcResult() {
  const game = GAMES[state.calcGameIndex];
  const avg = (game.earnMin + game.earnMax) / 2;
  const total = Math.round(avg * state.calcHours);
  document.getElementById('calcResult').textContent = '¥' + total;
}

// ---- Platforms ----
function renderPlatforms() {
  const el = document.getElementById('platformList');
  el.innerHTML = PLATFORMS.slice(0, 3).map(p => `
    <div class="platform-item">
      <div class="platform-item-left">
        <div class="platform-icon" style="background: ${p.color};">${p.icon}</div>
        <div>
          <div class="platform-name">${p.name}</div>
          <div class="platform-desc">${p.desc}</div>
        </div>
      </div>
      <button class="platform-btn" onclick="alert('即将跳转到 ${p.name} 交易平台')">前往出金</button>
    </div>
  `).join('');

  const grid = document.getElementById('platformsGrid');
  if (grid) {
    grid.innerHTML = PLATFORMS.map(p => `
      <div class="platform-card">
        <div class="platform-card-header">
          <div class="platform-card-icon" style="background: ${p.color};">${p.icon}</div>
          <div>
            <div class="platform-card-name">${p.name}</div>
            <div class="platform-card-rating">⭐ ${p.rating} · 交易平台</div>
          </div>
        </div>
        <div class="platform-card-desc">${p.desc}</div>
        <div class="platform-card-features">
          ${p.features.map(f => `<span class="platform-card-feature"><span class="check">✓</span> ${f}</span>`).join('')}
        </div>
        <button class="platform-btn" onclick="alert('即将跳转到 ${p.name} 交易平台')">前往出金</button>
      </div>
    `).join('');
  }
}

// ---- Guide Detail ----
function renderGuideDetail(guide) {
  const el = document.getElementById('guideDetail');
  el.innerHTML = `
    <div class="guide-detail-header">
      <div class="guide-meta">
        <span>📅 ${guide.date}</span>
        <span>⏱ ${guide.readTime}</span>
        <span>👁 ${guide.views} 阅读</span>
        <span>🏷 ${guide.game}</span>
      </div>
      <h1>${guide.title}</h1>
      <p class="guide-desc">${guide.desc}</p>
    </div>
    <div class="guide-detail-body">
      ${guide.content.map(block => {
        if (block.type === 'h2') return `<h2>${block.text}</h2>`;
        if (block.type === 'h3') return `<h3>${block.text}</h3>`;
        if (block.type === 'p') return `<p>${block.text}</p>`;
        if (block.type === 'table') {
          const d = block.data;
          return `<table class="data-table">
            <thead><tr>${d.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
            <tbody>${d.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>
          </table>`;
        }
        return '';
      }).join('')}
    </div>
    <div style="margin-top: 40px; padding-top: 24px; border-top: 1px solid var(--border);">
      <a href="#guides" class="btn btn-outline" data-nav>← 返回攻略列表</a>
    </div>
  `;
}

// ---- Full Rankings ----
function renderRankingsFull() {
  const el = document.getElementById('rankingsFull');
  const sorted = [...GAMES].sort((a, b) => {
    if (state.rankingSort === 'earnings') return (b.earnMax + b.earnMin) - (a.earnMax + a.earnMin);
    if (state.rankingSort === 'difficulty') return b.difficulty - a.difficulty;
    return a.name.localeCompare(b.name);
  });

  const searchTerm = (document.getElementById('rankingsSearch')?.value || '').toLowerCase();
  const filtered = searchTerm ? sorted.filter(g => g.name.toLowerCase().includes(searchTerm)) : sorted;

  el.innerHTML = filtered.map((game, i) => `
    <div class="ranking-item" onclick="navigate('#game/${game.name}')">
      <span class="ranking-number">${i + 1}</span>
      <div class="ranking-info">
        <div class="ranking-name">
          ${game.icon} ${game.name}
          <span class="ranking-tag">${game.genre}</span>
        </div>
        <div class="ranking-meta">${getDifficultyText(game.difficulty)} · ${game.tags.join(' · ')}</div>
      </div>
      <div class="ranking-stars">${renderStars(game.difficulty)}</div>
      <div class="ranking-earnings">
        <span class="earning-amount">${getEarnText(game)}</span>
        <span class="earning-label">时薪范围</span>
      </div>
      <span class="ranking-change ${game.change}">${getChangeIcon(game.change)} ${game.changeText}</span>
    </div>
  `).join('');

  if (filtered.length === 0) {
    el.innerHTML = `<div class="empty-state"><div class="empty-state-icon">🔍</div><div class="empty-state-text">未找到匹配的游戏</div></div>`;
  }
}

// ---- Full Games Page ----
function renderGamesFull() {
  const el = document.getElementById('gamesFull');
  const genres = [...new Set(GAMES.map(g => g.genre.split(' · ')[0]))];
  const chips = document.getElementById('gamesFilterChips');
  chips.innerHTML = `<button class="filter-chip active" data-filter="all">全部</button>` +
    genres.map(g => `<button class="filter-chip" data-filter="${g}">${g}</button>`).join('');

  chips.addEventListener('click', (e) => {
    const chip = e.target.closest('.filter-chip');
    if (!chip) return;
    chips.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    state.gamesFilter = chip.dataset.filter;
    renderGamesFull();
  });

  const filtered = state.gamesFilter === 'all' ? GAMES : GAMES.filter(g => g.genre.includes(state.gamesFilter));
  const searchTerm = (document.getElementById('gamesSearch')?.value || '').toLowerCase();
  const searched = searchTerm ? filtered.filter(g => g.name.toLowerCase().includes(searchTerm)) : filtered;

  el.innerHTML = searched.map(game => `
    <div class="game-card" onclick="navigate('#game/${game.name}')">
      <span class="game-card-icon">${game.icon}</span>
      <div class="game-card-name">${game.name}</div>
      <div class="game-card-genre">${game.genre}</div>
      <div class="game-card-earnings">${getEarnText(game)} <span>/时</span></div>
      <div class="game-card-stars">${renderStars(game.difficulty)}</div>
      <div class="game-card-data">数据验证于 ${game.verified}</div>
    </div>
  `).join('');

  if (searched.length === 0) {
    el.innerHTML = `<div class="empty-state"><div class="empty-state-icon">🎮</div><div class="empty-state-text">未找到匹配的游戏</div></div>`;
  }
}

// ---- Full Guides Page ----
function renderGuidesPage(filtered, activeFilter) {
  const el = document.getElementById('guidesFull') || document.getElementById('guideGrid');
  const items = filtered || GUIDES;
  const filter = activeFilter || 'all';

  const tabs = document.getElementById('guidesTabs');
  if (tabs) {
    const games = ['all', ...new Set(GUIDES.map(g => g.game))];
    tabs.innerHTML = games.map(g =>
      `<button class="guide-tab ${g === filter ? 'active' : ''}" data-filter="${g}">${g === 'all' ? '全部' : g}</button>`
    ).join('');
  }

  el.innerHTML = items.map(guide => {
    const colors = ['#e74c3c', '#3498db', '#f39c12', '#2ecc71', '#9b59b6', '#1abc9c'];
    const bgColor = colors[Math.floor(Math.random() * colors.length)];
    const hasPage = ['mhxy-shimen','sjz-delta','nsh-xinjijie','newbie-guide','mhxy-wukai','poe2-league'].includes(guide.id);
    const href = hasPage ? `guides/${guide.id}.html` : `#guide/${guide.id}`;
    return `
    <a href="${href}" class="guide-card" onclick="if(!event.ctrlKey&&!event.metaKey){event.preventDefault();navigate('#guide/${guide.id}')}">
      <div class="guide-card-image" style="background: linear-gradient(135deg, ${bgColor}, ${bgColor}88);">
        <div class="guide-tags">
          <span class="guide-tag">${guide.game}</span>
          <span class="guide-tag">最新</span>
        </div>
      </div>
      <div class="guide-card-body">
        <div class="guide-card-title">${guide.title}</div>
        <div class="guide-card-desc">${guide.desc}</div>
        <div class="guide-card-footer">
          <span>📅 ${guide.date}</span>
          <span>⏱ ${guide.readTime}</span>
          <span>👁 ${guide.views}</span>
        </div>
      </div>
    </a>
  `}).join('');

  if (items.length === 0) {
    el.innerHTML = `<div class="empty-state"><div class="empty-state-icon">📝</div><div class="empty-state-text">暂无私攻略</div></div>`;
  }
}

// ======================== COUNTER ANIMATION ========================

function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    const suffix = el.closest('[data-count]') === el ? '' : '';
    const isK = target >= 1000;
    const displayTarget = isK ? target / 1000 : target;
    const roundedTarget = isK ? (target / 1000).toFixed(target % 1000 === 0 ? 0 : 1) : target;
    const unit = isK ? 'k+' : '+';

    let current = 0;
    const increment = Math.max(1, Math.floor(displayTarget / 40));
    const timer = setInterval(() => {
      current += increment;
      if (current >= displayTarget) {
        current = displayTarget;
        clearInterval(timer);
      }
      el.textContent = (isK ? (current).toFixed(current % 1 === 0 ? 0 : 1) : Math.floor(current)) + (current >= displayTarget ? unit : '');
    }, 30);
  });
}

// ======================== SEARCH ========================

function setupSearch() {
  const input = document.getElementById('searchInput');
  const btn = document.getElementById('searchBtn');

  const doSearch = () => {
    const q = input.value.trim().toLowerCase();
    if (!q) return;
    const foundGame = GAMES.find(g => g.name.toLowerCase().includes(q));
    const foundGuide = GUIDES.find(g => g.title.toLowerCase().includes(q) || g.game.toLowerCase().includes(q));
    if (foundGame) {
      navigate('#game/' + foundGame.name);
    } else if (foundGuide) {
      navigate('#guide/' + foundGuide.id);
    } else {
      navigate('#guides');
    }
  };

  btn.addEventListener('click', doSearch);
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') doSearch(); });
}

// ======================== TAB FILTER (Home) ========================

function setupHomeTabs() {
  const container = document.querySelector('.guide-tabs');
  if (!container) return;
  container.addEventListener('click', (e) => {
    const tab = e.target.closest('.guide-tab');
    if (!tab) return;
    container.querySelectorAll('.guide-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderGuideGrid(tab.dataset.filter);
  });
}

// ======================== SORT (Rankings) ========================

function setupRankingsSort() {
  const container = document.querySelector('.rankings-sort');
  if (!container) return;
  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.sort-btn');
    if (!btn) return;
    container.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.rankingSort = btn.dataset.sort;
    renderRankingsFull();
  });
}

function setupRankingsSearch() {
  const input = document.getElementById('rankingsSearch');
  if (!input) return;
  input.addEventListener('input', renderRankingsFull);
}

function setupGamesSearch() {
  const input = document.getElementById('gamesSearch');
  if (!input) return;
  input.addEventListener('input', renderGamesFull);
}

function setupGuidesSearch() {
  const input = document.getElementById('guidesSearch');
  if (!input) return;
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) return renderGuidesPage(GUIDES, 'all');
    const filtered = GUIDES.filter(g =>
      g.title.toLowerCase().includes(q) ||
      g.game.toLowerCase().includes(q) ||
      g.desc.toLowerCase().includes(q)
    );
    renderGuidesPage(filtered, 'all');
  });
}

function setupGuidesTabs() {
  const container = document.getElementById('guidesTabs');
  if (!container) return;
  container.addEventListener('click', (e) => {
    const tab = e.target.closest('.guide-tab');
    if (!tab) return;
    container.querySelectorAll('.guide-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const filter = tab.dataset.filter;
    if (filter === 'all') renderGuidesPage(GUIDES, 'all');
    else renderGuidesPage(GUIDES.filter(g => g.game === filter), filter);
  });
}

// ======================== HEADER SCROLL ========================

function setupHeaderScroll() {
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// ======================== MOBILE MENU ========================

function setupMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const overlay = document.getElementById('mobileOverlay');
  const closeBtn = document.getElementById('mobileClose');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    overlay.classList.toggle('open');
    document.body.style.overflow = overlay.classList.contains('open') ? 'hidden' : '';
  });

  closeBtn.addEventListener('click', closeMobileMenu);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeMobileMenu();
  });
}

function closeMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const overlay = document.getElementById('mobileOverlay');
  hamburger.classList.remove('active');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// ======================== HEADER SEARCH VISIBILITY ========================

function setupHeaderSearchVisibility() {
  const searchBox = document.querySelector('.search-box');
  const mainNav = document.querySelector('.main-nav');
  if (window.innerWidth <= 480) {
    searchBox.style.display = 'none';
  }
}

// ======================== DYNAMIC PAGE TITLES ========================

(function setupPageTitles() {
  const titles = {
    home: '搬砖营地 BrickCamp - 游戏搬砖攻略站 | 首页',
    rankings: '搬砖收益排行榜 - 搬砖营地 BrickCamp',
    games: '游戏库 - 搬砖营地 BrickCamp',
    guides: '搬砖攻略 - 搬砖营地 BrickCamp',
    platforms: '交易推荐 - 搬砖营地 BrickCamp',
    about: '关于我们 - 搬砖营地 BrickCamp',
    'guide-detail': '攻略详情 - 搬砖营地 BrickCamp',
  };

  function updateTitle() {
    const hash = window.location.hash.replace('#', '') || 'home';
    const key = hash.split('/')[0];
    if (key === 'game') {
      const gameName = decodeURIComponent(hash.split('/')[1] || '');
      document.title = gameName ? `${gameName} - 搬砖营地 BrickCamp` : '游戏详情 - 搬砖营地 BrickCamp';
    } else {
      document.title = titles[key] || '搬砖营地 BrickCamp - 游戏搬砖攻略站';
    }
  }

  window.addEventListener('hashchange', updateTitle);
  updateTitle();
})();

// ======================== INIT ========================

function initApp() {
  renderRankingsPreview();
  renderGameGrid();
  renderGuideGrid('all');
  renderCalculator();
  renderPlatforms();
  renderRankingsFull();
  renderGamesFull();
  renderGuidesPage(GUIDES, 'all');
  animateCounters();
  setupSearch();
  setupHomeTabs();
  setupRankingsSort();
  setupRankingsSearch();
  setupGamesSearch();
  setupGuidesSearch();
  setupGuidesTabs();
  setupHeaderScroll();
  setupMobileMenu();
  setupHeaderSearchVisibility();
}
