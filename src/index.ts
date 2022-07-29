import './index.scss'

// inject this line into your code if you want webpack to use dynamic images
const reqImg = require.context('./images', true, /\.(jpg|svg|png)$/)
