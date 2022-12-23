module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    ['@babel/preset-react', {runtime: 'automatic'}],
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-transform-modules-commonjs',
    '@babel/plugin-transform-runtime',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: [
          {'@shared-components': './src/shared/components'},
          {'@shared-constants': './src/shared/constants'},
          {'@api': './src/services/api/index'},
          {'@theme': './src/shared/theme'},
          {'@localization': './src/shared/localization'},
          {'@services': './src/services'},
          {'@screens': './src/screens'},
          {'@shared': './src/shared'},
          {'@utils': './src/shared/utils/'},
          {'@assets': './src/assets/'},
          {'@icons': './src/assets/icons/'},
          {'@hooks': './src/shared/hooks/'},
          {'@test-utils': './test-utils.tsx'},
          {'@context': './src/shared/context/'},
          {'@utils': './src/shared/utils/'},
          {'@envs': './envs.ts'},
          {'@routes': './src/routes/'},
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
  ],
};
