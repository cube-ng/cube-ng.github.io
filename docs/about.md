# About cube.ng

**cube.ng** stands for **No Gap Earth System Data Cubes**. The project is developing AI-based workflows to reconstruct missing observations in [Earth System Data Cubes (ESDCs)](https://doi.org/10.5194/esd-11-201-2020) and to improve downstream forecasting in analysis-ready data (ARD).

The project is led by **Leipzig University**, within the [Institute for Earth System Science and Remote Sensing (IEF)](https://www.physes.uni-leipzig.de/en/ief). It builds on earlier work around [ESDCs](https://doi.org/10.5194/esd-11-201-2020), [DeepESDL](https://earthsystemdatalab.net/), and [AI for gap-filling Earth system data](https://doi.org/10.1109/TGRS.2025.3593051).

The project is **funded by the [European Space Agency (ESA)](https://www.esa.int/)**.

## Why this project exists

Many Earth observation products contain systematic gaps by cloud cover, orbital constraints, retrieval failures, sensor limitations, and other observational issues. These gaps propagate into downstream variables and make joint Earth system analyses harder, less robust, and sometimes biased.

**cube.ng** addresses that problem by developing methods that:

- reconstruct missing values in multivariate spatiotemporal Earth system datasets,
- preserve spatial, temporal, and cross-variable relationships,
- support analysis-ready Earth System Data Cubes (ESDCs),
- improve reconstruction and forecasting, especially under anomalous and extreme conditions.

## Scientific focus

The project combines two connected goals:

1. **Gap filling for Earth System Data Cubes**: **cube.ng** will develop robust workflows that use spatial, temporal, and multivariate information to reconstruct missing data.

2. **Forecasting with reconstructed data**: **cube.ng** will study whether gap-filled inputs improve predictive performance, particularly for extreme events such as heatwaves and droughts.

The methodological direction currently centers on **transformer-based reconstruction models** for Earth observation data, including gap-aware masking strategies designed for spatiotemporal arrays of multivariate information.

