app.get('/getCard', function(req, res) {

	var src = [
		{
			img: 'src/img/plnate_earth.jpg',
			title: '地球脉动1',
			brif:  '从非洲草原到热带雨林，再从荒凉峰顶到深邃大海，难以数计的生物以极其绝美的身姿呈现在世人面前。'
		},
		{
			img: 'src/img/planate_earth2.jpg',
			title: '地球脉动2',
			brif: '地球脉动2运用前瞻性思维，在过去三年中采用超高清4K摄影机拍摄，同时使用了无人机和远程控制拍摄技术。'
		},
		{
			img: 'src/img/ocean.jpg',
			title: '海洋',
			brif: '聚焦于覆盖着地球表面的四分之三的"蓝色领土”。深入探索这个幽深而富饶的神秘世界、完整地呈现海洋的壮美辽阔。'
		},
		{
			img: 'src/img/hunt.jpg',
			title: '猎捕',
			brif: '全方位展现动物在觅食过程中的戏剧性一刻，并首次披露南美水濑，座头鲸的猎食行为。'
		},
		{
			img: 'src/img/humankind.jpg',
			title: '人类星球',
			brif: '探讨人与自然的关系。8集节目分别探讨极地、山区、海洋、丛林、草原、河流、沙漠和城市的人类活动。'
		},
		{
			img: 'src/img/ice.jpg',
			title: '冰冻星球',
			brif: '这部耗资巨大的纪录片用镜头真实的展现了正在逐渐溶解的地球两极，以及生活在这里的各种生物，片中种种景象让人叹为观止。'
		},
    {
			img: 'src/img/plnate_earth.jpg',
			title: '地球脉动1',
			brif:  '从非洲草原到热带雨林，再从荒凉峰顶到深邃大海，难以数计的生物以极其绝美的身姿呈现在世人面前。'
		},
		{
			img: 'src/img/planate_earth2.jpg',
			title: '地球脉动2',
			brif: '地球脉动2运用前瞻性思维，在过去三年中采用超高清4K摄影机拍摄，同时使用了无人机和远程控制拍摄技术。'
		},
		{
			img: 'src/img/ocean.jpg',
			title: '海洋',
			brif: '聚焦于覆盖着地球表面的四分之三的"蓝色领土”。深入探索这个幽深而富饶的神秘世界、完整地呈现海洋的壮美辽阔。'
		},
		{
			img: 'src/img/hunt.jpg',
			title: '猎捕',
			brif: '全方位展现动物在觅食过程中的戏剧性一刻，并首次披露南美水濑，座头鲸的猎食行为。'
		},
		{
			img: 'src/img/humankind.jpg',
			title: '人类星球',
			brif: '探讨人与自然的关系。8集节目分别探讨极地、山区、海洋、丛林、草原、河流、沙漠和城市的人类活动。'
		},
		{
			img: 'src/img/ice.jpg',
			title: '冰冻星球',
			brif: '这部耗资巨大的纪录片用镜头真实的展现了正在逐渐溶解的地球两极，以及生活在这里的各种生物，片中种种景象让人叹为观止。'
		},
    {
			img: 'src/img/plnate_earth.jpg',
			title: '地球脉动1',
			brif:  '从非洲草原到热带雨林，再从荒凉峰顶到深邃大海，难以数计的生物以极其绝美的身姿呈现在世人面前。'
		},
		{
			img: 'src/img/planate_earth2.jpg',
			title: '地球脉动2',
			brif: '地球脉动2运用前瞻性思维，在过去三年中采用超高清4K摄影机拍摄，同时使用了无人机和远程控制拍摄技术。'
		},
		{
			img: 'src/img/ocean.jpg',
			title: '海洋',
			brif: '聚焦于覆盖着地球表面的四分之三的"蓝色领土”。深入探索这个幽深而富饶的神秘世界、完整地呈现海洋的壮美辽阔。'
		},
		{
			img: 'src/img/hunt.jpg',
			title: '猎捕',
			brif: '全方位展现动物在觅食过程中的戏剧性一刻，并首次披露南美水濑，座头鲸的猎食行为。'
		},
		{
			img: 'src/img/humankind.jpg',
			title: '人类星球',
			brif: '探讨人与自然的关系。8集节目分别探讨极地、山区、海洋、丛林、草原、河流、沙漠和城市的人类活动。'
		},
		{
			img: 'src/img/ice.jpg',
			title: '冰冻星球',
			brif: '这部耗资巨大的纪录片用镜头真实的展现了正在逐渐溶解的地球两极，以及生活在这里的各种生物，片中种种景象让人叹为观止。'
		},
    {
			img: 'src/img/plnate_earth.jpg',
			title: '地球脉动1',
			brif:  '从非洲草原到热带雨林，再从荒凉峰顶到深邃大海，难以数计的生物以极其绝美的身姿呈现在世人面前。'
		},
		{
			img: 'src/img/planate_earth2.jpg',
			title: '地球脉动2',
			brif: '地球脉动2运用前瞻性思维，在过去三年中采用超高清4K摄影机拍摄，同时使用了无人机和远程控制拍摄技术。'
		},
		{
			img: 'src/img/ocean.jpg',
			title: '海洋',
			brif: '聚焦于覆盖着地球表面的四分之三的"蓝色领土”。深入探索这个幽深而富饶的神秘世界、完整地呈现海洋的壮美辽阔。'
		},
		{
			img: 'src/img/hunt.jpg',
			title: '猎捕',
			brif: '全方位展现动物在觅食过程中的戏剧性一刻，并首次披露南美水濑，座头鲸的猎食行为。'
		},
		{
			img: 'src/img/humankind.jpg',
			title: '人类星球',
			brif: '探讨人与自然的关系。8集节目分别探讨极地、山区、海洋、丛林、草原、河流、沙漠和城市的人类活动。'
		},
		{
			img: 'src/img/ice.jpg',
			title: '冰冻星球',
			brif: '这部耗资巨大的纪录片用镜头真实的展现了正在逐渐溶解的地球两极，以及生活在这里的各种生物，片中种种景象让人叹为观止。'
		},
    {
			img: 'src/img/plnate_earth.jpg',
			title: '地球脉动1',
			brif:  '从非洲草原到热带雨林，再从荒凉峰顶到深邃大海，难以数计的生物以极其绝美的身姿呈现在世人面前。'
		},
		{
			img: 'src/img/planate_earth2.jpg',
			title: '地球脉动2',
			brif: '地球脉动2运用前瞻性思维，在过去三年中采用超高清4K摄影机拍摄，同时使用了无人机和远程控制拍摄技术。'
		},
		{
			img: 'src/img/ocean.jpg',
			title: '海洋',
			brif: '聚焦于覆盖着地球表面的四分之三的"蓝色领土”。深入探索这个幽深而富饶的神秘世界、完整地呈现海洋的壮美辽阔。'
		},
		{
			img: 'src/img/hunt.jpg',
			title: '猎捕',
			brif: '全方位展现动物在觅食过程中的戏剧性一刻，并首次披露南美水濑，座头鲸的猎食行为。'
		},
		{
			img: 'src/img/humankind.jpg',
			title: '人类星球',
			brif: '探讨人与自然的关系。8集节目分别探讨极地、山区、海洋、丛林、草原、河流、沙漠和城市的人类活动。'
		},
		{
			img: 'src/img/ice.jpg',
			title: '冰冻星球',
			brif: '这部耗资巨大的纪录片用镜头真实的展现了正在逐渐溶解的地球两极，以及生活在这里的各种生物，片中种种景象让人叹为观止。'
		}
	]

	var pageIndex = req.query.page;
	var len = 8;

	var retNews = 	src.slice(pageIndex*len, pageIndex*len+len); //0, 3;  3, 6
	
	res.send({
		status: 0,
		data: retNews
	});
});

