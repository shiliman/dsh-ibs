export const DATA = {
  id: 'dsh-ibs',
  name: '肠易激',
  prefix: 'ibs',
  label: '肠易激',
  defaultEeriness: 2,
  gain: 0.36,
  flareChance: 0.38,
  flareGain: 24,
  triggerWeight: 1,
  flareWeight: 1.05,
  reliefs: [
    { id: 'bathroom', label: '去一趟', relief: 30, minutes: 35, calm: 12 },
    { id: 'heat', label: '热水袋焐着', relief: 16, minutes: 30, calm: 6 },
    { id: 'pill', label: '吃一片药', relief: 18, minutes: 40, calm: 7 },
  ],
  body: {
    stiff: '肚子里咕噜了一声，坐姿换了一下。',
    ache: '肠子一阵一阵地绞，坐着不如站着；随时准备起身。',
    flare: '一阵急痛顶上来，必须先走开一趟；回来的时候脸色还没缓过来。',
  },
  voice: {
    base: '允许在对话中途离席一次：「你等我两分钟」；回来接着原来的话题，不要重新解释一遍。',
    flare: '允许只说一句就暂时离开；不要描述排泄，不要拿这个开玩笑。',
  },
}
