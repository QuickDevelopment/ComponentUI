module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
        colors: {
            'primary': '#000000',
            'inverse': '#ffffff',
        }
    }
  }
}