// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: '🚀 Getting Started',
      items: ['getting-started/quick-start', 'getting-started/installation'],
    },
    {
      type: 'category',
      label: '🏗️ Architecture',
      items: [
        'architecture/concept',
        'architecture/specification',
        {
          type: 'category',
          label: 'ADR',
          items: [
            'architecture/adr/index',
            'architecture/adr/isolation',
            'architecture/adr/dynamic-dependencies',
            'architecture/adr/api-wrapper',
            'architecture/adr/smart-sync',
            'architecture/adr/registries',
            'architecture/adr/monorepo',
            'architecture/adr/structured-output-validation',
            'architecture/adr/react-dashboard-with-plotly',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '📖 Guides',
      items: ['guides/running-benchmarks', 'guides/docker-deployment'],
    },
    {
      type: 'category',
      label: '🛠️ Contributor Guide',
      items: [
        'contributor-guide/development-workflow',
        'contributor-guide/dependency-management',
        'contributor-guide/project-structure',
      ],
    },
    {
      type: 'category',
      label: '🔬 Research',
      items: [
        'research/comparative-analysis',
        'research/modern_vlm_models',
        'research/vlm-evaluation-strategies',
        {
          type: 'category',
          label: '📁 Archive',
          items: [
            'research/archive/vlm-integration',
            'research/archive/evalscope-research',
            'research/archive/data-access',
            'research/archive/performance-metrics',
            'research/archive/abstraction-strategy',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '📦 API Reference',
      items: [
        'api-docs/benchmark_run_config',
        'api-docs/metric_evaluator',
      ],
    },
  ],
};

export default sidebars;
