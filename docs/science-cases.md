# Science Cases

**cube.ng** is designed to support multiple Earth system applications. The first consolidated science case is centered on **hydrology and land-surface processes**, with a focus on the reconstruction of input datasets required by terrestrial evaporation modeling workflows.

## Main science case: Reconstructing GLEAM v4 gappy inputs

The [**Global Land Evaporation Amsterdam Model (GLEAM)**](https://translate.google.com/translate?u=https://www.gleam.eu/&hl=es&sl=en&tl=es&client=srp) provides global estimates of terrestrial evaporation and related variables. Like many modeling systems, GLEAM requires input datasets that are spatially and temporally continuous. In practice, this means that input products affected by missing observations must be gap-filled before they can be used consistently in the modeling workflow.

This makes GLEAM input data a useful benchmark for **cube.ng**. The two projects are independent: **cube.ng** is not part of the GLEAM project, and GLEAM is not part of **cube.ng**. The connection is scientific and practical. Exchanges with the GLEAM team helped identify input datasets where reconstruction methods developed in **cube.ng** could be tested under realistic conditions.

**cube.ng** is currently considering the following GLEAM-related input datasets for gap filling and reconstruction:

- **MOD15A3H LAI**: leaf area index, 500 m, 4-day, 2002-2025.
- **MOD15A3H fPAR**: fraction of absorbed photosynthetically active radiation, 500 m, 4-day, 2002-2025.
- **GlobSnow v3.0 SWE**: snow water equivalent, 0.25 degree, daily, 1980-2018.
- **VODCA v2 CXKu**: vegetation optical depth, 0.25 degree, daily, 1987-2021.
- **VODCA v2 L**: vegetation optical depth, 0.25 degree, 10-day, 2010-2021.

These datasets were identified as suitable candidates because they combine scientific relevance with heterogeneous spatial and temporal resolutions. They also represent the type of incomplete Earth observation input data that must often be reconstructed before downstream modeling.

### Why these data are challenging

The selected sources include different kinds of missingness, including:

- clouds and observation gaps,
- model failures and retrieval limitations,
- residual radio-frequency interference,
- historical inconsistencies in station-linked products.

They also differ substantially in temporal coverage, temporal resolution, and spatial resolution. This combination makes them a demanding test case for assessing whether **cube.ng** methods can generalize across different data products while preserving physically meaningful patterns.
