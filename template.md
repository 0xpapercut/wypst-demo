# Hello wypst!
Render Typst directly to HTML. [Checkout the project on GitHub :)](https://github.com/0xpapercut/wypst)

## Capabilities

### Accent
*Unsupported.*

### Attach
$$sum_(i=0)^n a_i = 2^(1+i)$$
$$scripts(sum)_1^2 != sum_1^2$$
$$limits(A)_1^2 != A_1^2$$

*`tl`, `bl`, `tr` and `br` are unsupported.*

### Cancel
Here, we can simplify:

$$(a dot b dot cancel(x)) / cancel(x)$$

*`length`, `inverted`, `cross`, `angle` and `stroke` arguments are unsupported.*

### Cases
$$
f(x, y) := cases(
  1 "if" (x dot y)/2 <= 0,
  2 "if" x "is even",
  3 "if" x in NN,
  4 "else",
)
$$
*There are some spacing issues at the moment, and I hope to fix them soon.*

*`reverse` and `gap` arguments are unsupported.*

### Class
*Unsupported.*

### Equation
Let $a$, $b$, and $c$ be the side
lengths of right-angled triangle.
Then, we know that:

$$a^2 + b^2 = c^2$$

Prove by induction:

$$sum_(k=1)^n k = (n(n+1)) / 2$$

*`block`, `numbering` and `sumplement` arguments are unsupported.*

### Fraction
$$1/2 < (x+1)/2$$
$$((x+1)) / 2 = frac(a, b)$$

### Left/Right
$$[a, b/2]$$
$$(x mid(|) sum_(i=1)^n w_i|f_i (x)| < 1)$$
$$abs(x)$$
$$floor(x/2)$$
$$ceil(x/2)$$
$$round(x/2)$$
*`norm` and `abs` unsupported at the moment, but usable to some point.*

### Matrix
$$
mat(
  1, 2, ..., 10;
  2, 2, ..., 10;
  dots.v, dots.v, dots.down, dots.v;
  10, 10, ..., 10;
)
$$
*The `augment`, `gap`, `row-gap` and `column-gap` are unsupported.*

### Roots
$$sqrt(3 - 2 sqrt(2)) = sqrt(2) - 1$$
$$root(3, x)$$

### Sizes
*Unsupported.*

### Styles
*Unsupported.*

### Text Operator
$$tan x = (sin x)/(cos x)$$
$$op("custom", limits: #true)_(n->oo) n$$

### Under/Over
$$underline(1 + 2 + ... + 5)$$
$$overline(1 + 2 + ... + 5)$$
$$underbrace(1 + 2 + ... + 5, "numbers")$$
$$overbrace(1 + 2 + ... + 5, "numbers")$$
*`underbracket` and `overbracket` are unsupported.*

### Variants
*Unsupported.*

### [Vector](https://typst.app/docs/reference/math/vec/)
$$vec(a, b, c) dot vec(1, 2, 3)$$
$$vec(delim: "[", a, b, c) = vec(delim: "|", x, y, z)$$
*The `gap` argument is unsupported.*

## Note
Although there are some unsupported features, I should be able to finish this up after my exams (March)
