import { Question } from './types';

// Updated data using LaTeX syntax ($...$) for MathRenderer
export const questions: Question[] = [
  {
    id: 1,
    questionText: "若 $F_1(j\\omega) = F[f_1(t)]$，则 $F_2(j\\omega) = F[f_1(4 - 2t)] = $ 。",
    options: [
      { label: "A", text: "$\\frac{1}{2} F_1(j\\omega)e^{-j4\\omega}$" },
      { label: "B", text: "$\\frac{1}{2} F_1(-j\\frac{\\omega}{2})e^{-j4\\omega}$" },
      { label: "C", text: "$F_1(-j\\omega)e^{-j\\omega}$" },
      { label: "D", text: "$\\frac{1}{2} F_1(-j\\frac{\\omega}{2})e^{-j2\\omega}$" }
    ],
    correctOption: "D",
    analysis: "<p>根据傅里叶变换的性质：</p><ol><li><strong>尺度变换：</strong> $f(at) \\leftrightarrow \\frac{1}{|a|}F(j\\frac{\\omega}{a})$</li><li><strong>时移特性：</strong> $f(t-t_0) \\leftrightarrow F(j\\omega)e^{-j\\omega t_0}$</li></ol><p>$f_1(4-2t)$ 可以看作 $f_1(-2(t-2))$。步骤如下：</p><ol><li>先尺度变换：$f_1(-2t) \\leftrightarrow \\frac{1}{2}F_1(-j\\frac{\\omega}{2})$</li><li>再时移变换（$t$ 替换为 $t-2$）：$f_1(-2(t-2)) \\leftrightarrow [\\frac{1}{2}F_1(-j\\frac{\\omega}{2})] \\cdot e^{-j\\omega 2}$</li></ol><p>整理得：$\\frac{1}{2}F_1(-j\\frac{\\omega}{2})e^{-j2\\omega}$。</p>",
    difficulty: "medium",
    tags: ["Fourier Transform", "Properties"]
  },
  {
    id: 2,
    questionText: "非周期连续信号被理想冲激取样后，取样信号的频谱 $F_s(j\\omega)$ 是。",
    options: [
      { label: "A", text: "离散频谱" },
      { label: "B", text: "连续频谱" },
      { label: "C", text: "连续周期频谱" },
      { label: "D", text: "不确定，要依赖于信号而变化" }
    ],
    correctOption: "C",
    analysis: "<p>时域的离散化（采样）对应频域的周期化。由于原信号是非周期的，其频谱是连续的。采样后，频谱会在频率轴上以采样频率为周期进行搬移叠加，因此结果是<strong>连续且周期</strong>的频谱。</p>",
    difficulty: "easy",
    tags: ["Sampling", "Spectrum"]
  },
  {
    id: 3,
    questionText: "已知 $f(t)$ 的频带宽度为 $\\Delta\\omega$，则 $f(2t-4)$ 的频带宽度为。",
    options: [
      { label: "A", text: "$2\\Delta\\omega$" },
      { label: "B", text: "$\\frac{1}{2} \\Delta\\omega$" },
      { label: "C", text: "$2(\\Delta\\omega-4)$" },
      { label: "D", text: "$2(\\Delta\\omega-2)$" }
    ],
    correctOption: "A",
    analysis: "<p>信号的带宽主要受尺度变换（Scaling）影响，不受时移（Shifting）影响。</p><p>$f(2t-4)$ 中，时间尺度压缩了2倍（$t$ 前面的系数为2）。根据时频对偶性，时域压缩对应频域扩展。因此带宽变为原来的 <strong>2倍</strong>，即 $2\\Delta\\omega$。</p>",
    difficulty: "easy",
    tags: ["Bandwidth", "Scaling"]
  },
  {
    id: 4,
    questionText: "$\\int_{-3}^{3} \\cos(\\frac{\\pi t}{2})\\cdot\\delta(t+2)dt$ 等于。",
    options: [
      { label: "A", text: "0" },
      { label: "B", text: "-1" },
      { label: "C", text: "2" },
      { label: "D", text: "-2" }
    ],
    correctOption: "B",
    analysis: "<p>根据冲激函数的筛选性质：$\\int f(t)\\delta(t-t_0)dt = f(t_0)$，前提是积分区间包含 $t_0$。</p><p>这里 $\\delta(t+2)$ 的冲激点在 $t = -2$ 处。</p><p>积分区间 $[-3, 3]$ 包含 -2。</p><p>计算值：$\\cos(\\frac{\\pi(-2)}{2}) = \\cos(-\\pi) = $ <strong>-1</strong>。</p>",
    difficulty: "easy",
    tags: ["Impulse Function", "Integral"]
  },
  {
    id: 5,
    questionText: "信号 $x(t) = 3\\cos(4t + \\pi/3)$ 的周期是。",
    options: [
      { label: "A", text: "$2\\pi$" },
      { label: "B", text: "$\\pi$" },
      { label: "C", text: "$\\pi/2$" },
      { label: "D", text: "$2\\pi/4$" }
    ],
    correctOption: "C",
    analysis: "<p>周期信号 $\\cos(\\omega t + \\varphi)$ 的周期 $T = 2\\pi/\\omega$。</p><p>本题中 $\\omega = 4$。</p><p>所以 $T = 2\\pi / 4 = $ <strong>$\\pi/2$</strong>。</p>",
    difficulty: "easy",
    tags: ["Periodicity"]
  },
  {
    id: 6,
    questionText: "信号 $x(n) = 2\\cos(n\\pi/4) + \\sin(n\\pi/8) - 2\\cos(n\\pi/2 + \\pi/6)$ 的周期是。",
    options: [
      { label: "A", text: "8" },
      { label: "B", text: "16" },
      { label: "C", text: "2" },
      { label: "D", text: "4" }
    ],
    correctOption: "B",
    analysis: "<p>对于离散正弦信号，周期 $N = 2\\pi k/\\Omega$ (k取使N为整数的最小正整数)。</p><ul><li>第一项 $\\omega_1=\\pi/4$，$N_1 = 2\\pi/(\\pi/4) = 8$。</li><li>第二项 $\\omega_2=\\pi/8$，$N_2 = 2\\pi/(\\pi/8) = 16$。</li><li>第三项 $\\omega_3=\\pi/2$，$N_3 = 2\\pi/(\\pi/2) = 4$。</li></ul><p>总周期是各分量周期的最小公倍数：LCM(8, 16, 4) = <strong>16</strong>。</p>",
    difficulty: "medium",
    tags: ["Discrete Signals", "Periodicity"]
  },
  {
    id: 7,
    questionText: "设当 $n<-2$ 和 $n>4$ 时，$x(n)=0$，则序列 $x(n-3)$ 为零的 $n$ 值为。",
    options: [
      { label: "A", text: "$n=3$" },
      { label: "B", text: "$n<7$" },
      { label: "C", text: "$n>7$" },
      { label: "D", text: "$n<1$ 和 $n>7$" }
    ],
    correctOption: "D",
    analysis: "<p>原序列 $x(n)$ 的非零区间为 $[-2, 4]$。</p><p>$x(n-3)$ 表示将序列向右平移 3 个单位。</p><p>新的非零区间为 $[-2+3, 4+3] = [1, 7]$。</p><p>因此，为零的区间是 <strong>$n < 1$ 和 $n > 7$</strong>。</p>",
    difficulty: "medium",
    tags: ["Discrete Signals", "Shifting"]
  },
  {
    id: 8,
    questionText: "连续时间信号 $f(t)$ 的占有频带为 $0\\sim10\\text{KHz}$，经均匀抽样后，构成一离散时间信号，为保证能从离散信号中恢复原信号 $f(t)$，则抽样周期的值最大不超过。",
    options: [
      { label: "A", text: "$10^{-4}\\text{s}$" },
      { label: "B", text: "$10^{-5}\\text{s}$" },
      { label: "C", text: "$5\\times10^{-5}\\text{s}$" },
      { label: "D", text: "$10^{-3}\\text{s}$" }
    ],
    correctOption: "C",
    analysis: "<p>信号最高频率 $f_m = 10 \\text{ kHz}$。</p><p>根据奈奎斯特采样定理，采样频率 $f_s \\ge 2f_m = 20 \\text{ kHz}$。</p><p>采样周期 $T_s = 1/f_s \\le 1/20000 \\text{ s}$。</p><p>$1/20000 = 0.5 \\times 10^{-4} = $ <strong>$5 \\times 10^{-5} \\text{ s}$</strong>。</p>",
    difficulty: "easy",
    tags: ["Sampling Theorem"]
  },
  {
    id: 9,
    questionText: "设当 $t<3$ 时，$x(t)=0$，则使 $x(1-t)\\cdot x(2-t) = 0$ 的 $t$ 值为。",
    options: [
      { label: "A", text: "$t>2$ 或 $t>-1$" },
      { label: "B", text: "$t=1$ 和 $t=2$" },
      { label: "C", text: "$t>-1$" },
      { label: "D", text: "$t>-2$" }
    ],
    correctOption: "D",
    analysis: "<p>已知 $x(\\tau) \\neq 0$ 当且仅当 $\\tau \\ge 3$。</p><p>我们考察乘积不为零（非零）的情况：</p><ul><li>$x(1-t) \\neq 0 \\Rightarrow 1-t \\ge 3 \\Rightarrow t \\le -2$</li><li>$x(2-t) \\neq 0 \\Rightarrow 2-t \\ge 3 \\Rightarrow t \\le -1$</li></ul><p>乘积不为零需要两者同时满足：$t \\le -2 \\cap t \\le -1 \\Rightarrow t \\le -2$。</p><p>反之，乘积为零的范围是 $t \\le -2$ 的补集，即 <strong>$t > -2$</strong>。</p>",
    difficulty: "hard",
    tags: ["Signal Operations"]
  },
  {
    id: 10,
    questionText: "如果一离散时间系统的系统函数 $H(z)$ 只有一个在单位圆上实数为 1 的极点，则它的 $h(n)$ 应是。",
    options: [
      { label: "A", text: "$u(n)$" },
      { label: "B", text: "$-u(n)$" },
      { label: "C", text: "$(-1)^n u(n)$" },
      { label: "D", text: "1" }
    ],
    correctOption: "A",
    analysis: "<p>极点在 $z=1$，且通常假设因果系统。</p><p>对应的 Z 变换形式为 $H(z) = \\frac{z}{z-1}$ 或 $\\frac{1}{1-z^{-1}}$。</p><p>这是单位阶跃序列 <strong>$u(n)$</strong> 的 Z 变换。</p>",
    difficulty: "easy",
    tags: ["Z-Transform", "Poles"]
  },
  {
    id: 11,
    questionText: "线性时不变系统输出中的自由响应的形式由决定。",
    options: [
      { label: "A", text: "系统函数极点的位置" },
      { label: "B", text: "激励信号的形式" },
      { label: "C", text: "系统起始状态" },
      { label: "D", text: "以上均不对" }
    ],
    correctOption: "A",
    analysis: "<p>系统的自由响应（齐次解）取决于系统的特征根。</p><p>在 s 域或 z 域分析中，特征根对应于<strong>系统函数的极点</strong>。激励信号只影响特解（强迫响应）。</p>",
    difficulty: "easy",
    tags: ["LTI Systems", "Response"]
  },
  {
    id: 12,
    questionText: "已知信号 $f(t)$ 的频带宽度为 $\\Delta\\omega$，则 $f(3t-2)$ 的频带宽度为___。",
    options: [
      { label: "A", text: "$3\\Delta\\omega$" },
      { label: "B", text: "$\\Delta\\omega/3$" },
      { label: "C", text: "$(\\Delta\\omega-2)/3$" },
      { label: "D", text: "$(\\Delta\\omega-6)/3$" }
    ],
    correctOption: "A",
    analysis: "<p>与第3题类似，带宽只受时间尺度因子影响。</p><p>$t$ 的系数为 3，意味着时域压缩 3 倍。</p><p>频域扩展 3 倍，带宽变为 <strong>$3\\Delta\\omega$</strong>。</p>",
    difficulty: "easy",
    tags: ["Bandwidth"]
  },
  {
    id: 13,
    questionText: "设当 $t<3$ 时，$x(t)=0$，则使 $x(t/3)=0$ 的 $t$ 值为。",
    options: [
      { label: "A", text: "$t>3$" },
      { label: "B", text: "$t=0$" },
      { label: "C", text: "$t<9$" },
      { label: "D", text: "$t=3$" }
    ],
    correctOption: "C",
    analysis: "<p>$x(\\tau) = 0$ 当 $\\tau < 3$。</p><p>令 $\\tau = t/3$。</p><p>则 $x(t/3) = 0$ 当 $t/3 < 3$。</p><p>即 <strong>$t < 9$</strong>。</p>",
    difficulty: "easy",
    tags: ["Time Scaling"]
  },
  {
    id: 14,
    questionText: "$\\int_{-\\infty}^{t} \\delta(\\tau) \\frac{\\sin 2\\tau}{\\tau} d\\tau = $ 。",
    options: [
      { label: "A", text: "$2u(t)$" },
      { label: "B", text: "$4\\delta(t)$" },
      { label: "C", text: "4" },
      { label: "D", text: "$4u(t)$" }
    ],
    correctOption: "A",
    analysis: "<p>利用冲激函数的采样性质：$f(t)\\delta(t) = f(0)\\delta(t)$。</p><p>此处 $f(\\tau) = \\frac{\\sin(2\\tau)}{\\tau}$。取极限 $\\lim_{\\tau\\to 0} \\frac{\\sin(2\\tau)}{\\tau} = 2$。</p><p>所以被积函数化简为 $2\\delta(\\tau)$。</p><p>积分：$\\int_{-\\infty}^{t} 2\\delta(\\tau) d\\tau = 2 \\int_{-\\infty}^{t} \\delta(\\tau) d\\tau = $ <strong>$2u(t)$</strong>。</p>",
    difficulty: "medium",
    tags: ["Impulse Function", "Integral"]
  },
  {
    id: 15,
    questionText: "单边拉普拉斯变换 $F(s) = \\frac{2s+1}{s^2} e^{-2s}$ 的原函数等于。",
    options: [
      { label: "A", text: "$tu(t)$" },
      { label: "B", text: "$tu(t-2)$" },
      { label: "C", text: "$(t-2)u(t)$" },
      { label: "D", text: "$(t-2)u(t-2)$" }
    ],
    correctOption: "B",
    analysis: "<p>$F(s) = (\\frac{2}{s} + \\frac{1}{s^2})e^{-2s}$。</p><p>忽略指数项（时移因子），$F_1(s) = \\frac{2}{s} + \\frac{1}{s^2}$。</p><p>原函数 $f_1(t) = 2u(t) + tu(t) = (t+2)u(t)$。</p><p>加入 $e^{-2s}$ 对应时移 $t \\to t-2$：</p><p>$f(t) = [(t-2)+2]u(t-2) = $ <strong>$t\\cdot u(t-2)$</strong>。</p><p><em>注：注意题目图片中分母是 $s^2$，分子 $2s+1$ 拆分后得 $2/s + 1/s^2$。</em></p>",
    difficulty: "hard",
    tags: ["Laplace Transform"]
  },
  {
    id: 16,
    questionText: "已知系统的激励 $e(t)$ 与响应 $r(t)$ 的关系为：$r(t) = e(1-t)$，则该系统为。",
    options: [
      { label: "A", text: "线性时不变系统" },
      { label: "B", text: "线性时变系统" },
      { label: "C", text: "非线性时不变系统" },
      { label: "D", text: "非线性时变系统" }
    ],
    correctOption: "B",
    analysis: "<p><strong>线性：</strong>满足叠加原理。$r(t)$是$e(t)$的线性变换，是线性的。</p><p><strong>时变性：</strong></p><ul><li>输入 $e(t) \\to$ 输出 $e(1-t)$</li><li>输入延时 $e(t-t_0) \\to$ 输出 $e(1-t-t_0)$（按规则替换函数参数）</li><li>原输出延时 $r(t-t_0) = e(1-(t-t_0)) = e(1-t+t_0)$</li></ul><p>两者不相等，故为<strong>时变</strong>系统。选 B。</p>",
    difficulty: "medium",
    tags: ["System Properties"]
  },
  {
    id: 17,
    questionText: "连续周期信号 $f(t)$ 的频谱 $F(j\\omega)$ 的特点是。",
    options: [
      { label: "A", text: "周期、连续频谱" },
      { label: "B", text: "周期、离散频谱" },
      { label: "C", text: "连续、非周期频谱" },
      { label: "D", text: "离散、非周期频谱" }
    ],
    correctOption: "D",
    analysis: "<p>周期信号可以展开为傅里叶级数，其频谱存在于谐波频率处，因此是<strong>离散</strong>的。</p><p>除非信号本身是离散的，否则其频谱通常是<strong>非周期</strong>的（只在 $k\\Omega_0$ 处有值）。所以是离散、非周期频谱（也称为谐波频谱）。</p>",
    difficulty: "easy",
    tags: ["Spectrum", "Periodic Signals"]
  },
  {
    id: 18,
    questionText: "若系统的起始状态为 0，在 $x(t)$ 的激励下，所得的响应为。",
    options: [
      { label: "A", text: "强迫响应" },
      { label: "B", text: "稳态响应" },
      { label: "C", text: "暂态响应" },
      { label: "D", text: "零状态响应" }
    ],
    correctOption: "D",
    analysis: "<p>全响应 = 零输入响应 + 零状态响应。</p><p>起始状态为 0，意味着没有储能，零输入响应为 0。</p><p>因此此时的响应完全由激励引起，称为<strong>零状态响应</strong>。</p>",
    difficulty: "easy",
    tags: ["System Response"]
  },
  {
    id: 19,
    questionText: "周期序列 $2\\cos(3\\pi n/4 + \\pi/6) + \\sin(\\pi n/4)$ 的周期 $N$ 等于：",
    options: [
      { label: "A", text: "8" },
      { label: "B", text: "8/3" },
      { label: "C", text: "4" },
      { label: "D", text: "$\\pi/4$" }
    ],
    correctOption: "A",
    analysis: "<p>第一项：$\\omega_1 = 3\\pi/4$，$N_1 = 2\\pi / (3\\pi/4) \\times 3 = 8$。</p><p>第二项：$\\omega_2 = \\pi/4$，$N_2 = 2\\pi / (\\pi/4) = 8$。</p><p>LCM(8, 8) = <strong>8</strong>。</p>",
    difficulty: "easy",
    tags: ["Discrete Signals", "Periodicity"]
  },
  {
    id: 20,
    questionText: "已知系统的激励 $e(t)$ 与响应 $r(t)$ 的关系为：$r(t) = e^2(t)$，则该系统为。",
    options: [
      { label: "A", text: "线性时不变系统" },
      { label: "B", text: "线性时变系统" },
      { label: "C", text: "非线性时不变系统" },
      { label: "D", text: "非线性时变系统" }
    ],
    correctOption: "C",
    analysis: "<p><strong>非线性：</strong>输出是输入的平方，不满足叠加性 $(k\\cdot e)^2 \\neq k\\cdot e^2$。</p><p><strong>时不变：</strong>关系式中不显含时间 $t$，输入延时导致输出单纯延时。$r(t-t_0) = e^2(t-t_0)$。是时不变的。</p><p>故选 <strong>C</strong>。</p>",
    difficulty: "easy",
    tags: ["System Properties"]
  },
  {
    id: 21,
    questionText: "已知 Z 变换 $Z[x(n)] = \\frac{1}{1-3z^{-1}}$，收敛域 $|z|>3$，则逆变换 $x(n)$ 为。",
    options: [
      { label: "A", text: "$3^n u(n)$" },
      { label: "B", text: "$3^n u(n-1)$" },
      { label: "C", text: "$-3^n u(-n)$" },
      { label: "D", text: "$-3^{-n} u(-n-1)$" }
    ],
    correctOption: "A",
    analysis: "<p>基本 Z 变换对：$a^n u(n) \\leftrightarrow \\frac{1}{1-az^{-1}}$，ROC: $|z|>|a|$。</p><p>此处 $a=3$，ROC 为 $|z|>3$ (外侧，对应右边序列)。</p><p>所以直接对应 <strong>$3^n u(n)$</strong>。</p>",
    difficulty: "easy",
    tags: ["Z-Transform"]
  },
  {
    id: 22,
    questionText: "已知信号 $f(t) = \\text{Sa}(100t) + \\text{Sa}^2(60t)$，则奈奎斯特取样频率 $f_s$ 为。",
    options: [
      { label: "A", text: "$50/\\pi$" },
      { label: "B", text: "$120/\\pi$" },
      { label: "C", text: "$100/\\pi$" },
      { label: "D", text: "$60/\\pi$" }
    ],
    correctOption: "B",
    analysis: "<p>$\\text{Sa}(100t)$ 的截止频率 $\\omega_1 = 100$。</p><p>$\\text{Sa}(60t)$ 的截止频率为 60。$\\text{Sa}^2(60t)$ 在频域对应卷积，频带宽度加倍，故 $\\omega_2 = 2 \\times 60 = 120$。</p><p>信号最高频率 $\\omega_m = \\max(100, 120) = 120 \\text{ rad/s}$。</p><p>奈奎斯特角频率 $\\omega_s = 2\\omega_m = 240$。</p><p>$f_s = \\omega_s / 2\\pi = 240 / 2\\pi = $ <strong>$120/\\pi$</strong>。</p>",
    difficulty: "medium",
    tags: ["Sampling"]
  },
  {
    id: 23,
    questionText: "设当 $t<3$ 时，$x(t)=0$，则使 $x(1-t) + x(2-t) = 0$ 的 $t$ 值为。",
    options: [
      { label: "A", text: "$t>-2$ 或 $t>-1$" },
      { label: "B", text: "$t=1$ 和 $t=2$" },
      { label: "C", text: "$t>-1$" },
      { label: "D", text: "$t>-2$" }
    ],
    correctOption: "C",
    analysis: "<p>要使和为 0，且考虑到 $x(t)$ 是非负还是可能有负值？通常此类题目隐含 $x(t)$ 为单极性或求非零区间之外。</p><p>题目应理解为求两个信号都为 0 的区间。</p><ul><li>$x(1-t) \\neq 0 \\Rightarrow 1-t \\ge 3 \\Rightarrow t \\le -2$。为 0 则 $t > -2$。</li><li>$x(2-t) \\neq 0 \\Rightarrow 2-t \\ge 3 \\Rightarrow t \\le -1$。为 0 则 $t > -1$。</li></ul><p>两项都必须为 0，取交集：$(t > -2) \\cap (t > -1) \\Rightarrow$ <strong>$t > -1$</strong>。</p>",
    difficulty: "medium",
    tags: ["Signal Operations"]
  },
  {
    id: 24,
    questionText: "信号 $f(t) = \\text{Sa}(100t)$，其最低取样频率 $f_s$ 为。",
    options: [
      { label: "A", text: "$100/\\pi$" },
      { label: "B", text: "$200/\\pi$" },
      { label: "C", text: "$\\pi/100$" },
      { label: "D", text: "$\\pi/200$" }
    ],
    correctOption: "A",
    analysis: "<p>$\\text{Sa}(100t) = \\sin(100t)/100t$。</p><p>最高角频率 $\\omega_m = 100 \\text{ rad/s}$。</p><p>奈奎斯特采样角频率 $\\omega_s = 2\\omega_m = 200 \\text{ rad/s}$。</p><p>$f_s = \\omega_s / 2\\pi = 200 / 2\\pi = $ <strong>$100/\\pi$</strong> Hz。</p>",
    difficulty: "easy",
    tags: ["Sampling"]
  },
  {
    id: 25,
    questionText: "已知 $x(n)$ 的 Z 变换 $X(z) = \\frac{1}{(z+0.5)(z+2)}$，$X(z)$ 的收敛域为时，$x(n)$ 为因果信号。",
    options: [
      { label: "A", text: "$|z|>0.5$" },
      { label: "B", text: "$|z|<0.5$" },
      { label: "C", text: "$|z|>2$" },
      { label: "D", text: "$0.5<|z|<2$" }
    ],
    correctOption: "C",
    analysis: "<p>极点为 $z_1 = -0.5$ 和 $z_2 = -2$。</p><p>极点模值分别为 0.5 和 2。</p><p>因果信号对应右边序列，收敛域应在最外侧极点的外部。</p><p>即 ROC: <strong>$|z| > 2$</strong>。</p>",
    difficulty: "medium",
    tags: ["Z-Transform", "ROC"]
  },
  {
    id: 26,
    questionText: "一个因果稳定的离散系统，其 $H(z)$ 的全部极点须分布在 z 平面的。",
    options: [
      { label: "A", text: "单位圆外" },
      { label: "B", text: "单位圆内" },
      { label: "C", text: "单位圆上" },
      { label: "D", text: "单位圆内或单位圆上" }
    ],
    correctOption: "B",
    analysis: "<p>因果系统：ROC 在最外极点之外。</p><p>稳定系统：ROC 必须包含单位圆 ($|z|=1$)。</p><p>结合两者，最外侧极点的模必须小于 1。</p><p>因此所有极点必须在<strong>单位圆内</strong>。</p>",
    difficulty: "easy",
    tags: ["System Stability"]
  },
  {
    id: 27,
    questionText: "设当 $n<-2$ 和 $n>4$ 时，$x(n)=0$，则序列 $x(-n-2)$ 为零的 $n$ 值为。",
    options: [
      { label: "A", text: "$n>0$" },
      { label: "B", text: "$n>0$ 和 $n<-6$" },
      { label: "C", text: "$n=-2$ 和 $n>0$" },
      { label: "D", text: "$n=-2$" }
    ],
    correctOption: "B",
    analysis: "<p>令 $m = -n-2$。原信号非零区间为 $-2 \\le m \\le 4$。</p><p>代入不等式：</p><ul><li>$-2 \\le -n-2 \\Rightarrow -n \\ge 0 \\Rightarrow n \\le 0$</li><li>$-n-2 \\le 4 \\Rightarrow -n \\le 6 \\Rightarrow n \\ge -6$</li></ul><p>非零区间为 $[-6, 0]$。</p><p>为零区间即为补集：<strong>$n < -6$ 或 $n > 0$</strong>。</p>",
    difficulty: "hard",
    tags: ["Signal Operations"]
  },
  {
    id: 28,
    questionText: "已知系统的系统函数为 $H(s) = \\frac{s+2}{s(s^2+3s+2)}$，求系统的自然频率为。",
    options: [
      { label: "A", text: "-1, -2" },
      { label: "B", text: "0, -1, -2" },
      { label: "C", text: "0, -1" },
      { label: "D", text: "-2" }
    ],
    correctOption: "B",
    analysis: "<p>自然频率由分母多项式（特征方程）的根（极点）决定。</p><p>分母 $D(s) = s(s^2 + 3s + 2) = s(s+1)(s+2)$。</p><p>根为 $s_1=0, s_2=-1, s_3=-2$。</p><p>虽然分子有 $(s+2)$，可能会与极点 $s=-2$ 对消，但自然频率通常指系统固有的模态频率，由特征方程决定。即便对消，该模式在某些内部状态下可能仍存在（不可观测或不可控）。不过通常考试中，如果不涉及零极点对消的最小实现问题，直接看分母。</p><p>此处选 <strong>B</strong> (0, -1, -2) 最为完整。</p>",
    difficulty: "medium",
    tags: ["System Function"]
  },
  {
    id: 29,
    questionText: "已知 $x(n)$ 的 Z 变换 $X(z) = \\frac{1}{(z+1)(z+2)}$，$X(z)$ 的收敛域为时，$x(n)$ 为因果信号。",
    options: [
      { label: "A", text: "$|z|>1$" },
      { label: "B", text: "$|z|<1$" },
      { label: "C", text: "$|z|>2$" },
      { label: "D", text: "$1<|z|<2$" }
    ],
    correctOption: "C",
    analysis: "<p>极点为 -1 和 -2。</p><p>因果信号 ROC 在最外极点之外。</p><p>$\\max(|-1|, |-2|) = 2$。</p><p>ROC: <strong>$|z| > 2$</strong>。</p>",
    difficulty: "easy",
    tags: ["ROC"]
  },
  {
    id: 30,
    questionText: "下列各表达式中正确的是",
    options: [
      { label: "A", text: "$\\delta(2t) = \\delta(t)$" },
      { label: "B", text: "$\\delta(2t) = \\frac{1}{2} \\delta(t)$" },
      { label: "C", text: "$\\delta(2t) = 2\\delta(t)$" },
      { label: "D", text: "$2\\delta(t) = \\frac{1}{2} \\delta(2t)$" }
    ],
    correctOption: "B",
    analysis: "<p>根据冲激函数的尺度变换性质：</p><p>$\\delta(at) = \\frac{1}{|a|} \\cdot \\delta(t)$。</p><p>此处 $a=2$，所以 $\\delta(2t) = $ <strong>$\\frac{1}{2} \\delta(t)$</strong>。</p>",
    difficulty: "easy",
    tags: ["Impulse Function"]
  }
];