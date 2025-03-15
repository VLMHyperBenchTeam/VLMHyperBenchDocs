import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Легок в использовании',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        VLMHyperBench был разработан так, чтобы его можно было легко 
        установить и использовать для быстрого запуска бенчмарка
        нужных вам VLM-моделей.
      </>
    ),
  },
  {
    title: 'Сфокусируйтесь на том, что важно',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Сфокусируйтесь на тестировании VLM-моделей и подборе промптов.
        VLMHyperBench организует бенчмарк и предоставит результаты.
      </>
    ),
  },
  {
    title: 'Powered by Docker',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Каждая VLM-модель живет в своем Docker-контейнере. 
        Благодаря этому можно сравнивать модели из разного окружения.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
