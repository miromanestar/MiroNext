import React from 'react'

import Template from '../../../components/Template'
import PaperDetails from '../../../components/PaperDetails'
import Technologies from '../../../components/Technologies'

const HawaiiPRB = () => (
    <Template 
        title="Hawaii vs PRB Geochemical Analysis" 
        names={['', 'Hawaii vs PRB']}
        rightSidebar={
        <div className="max-w-sm sticky top-3">
            <PaperDetails data={details} />
        </div>
    }
    >
        {/* <iframe src='/plots/hawaii_pca.html' className='w-full h-[1200px]' title='Hawaii vs PRB Geochemical Analysis'></iframe> */}
        <div className="mx-auto max-w-7xl lg:px-8">
            <div className="mx-auto sm:text-center">
                <h2 className="text-base font-semibold leading-7 text-highlight">Data Science</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Comparing Igneous Geochemical Data from Hawaii and Southern California via Machine Learning</p>
                <a href="https://github.com/miromanestar/LomaGeology" className='mt-2 text-md leading-7 text-gray-400'>View Source</a>
                <p className="mt-4 text-lg leading-8 text-gray-300">
                    Bi-plots are commonly used in geochemical analyses. However, their use can become cumbersome in the case of multi-variate analyses. 
                    Therefore, this paper explores the application of unsupervised machine learning techniques, specifically PCA and K-Means, to analyze 
                    large geochemical data sets from two distinct geological regions, Hawaii and the Peninsular Ranges Batholith (PRB) in Southern California. 
                    The IBM Foundational Methodology for Data Science was utilized to ensure proper data preparation and analysis. PCA provided dimensionality 
                    reduction, revealing which features correlated most strongly with variances within the data. K-Means clustering allowed for deeper interpretation 
                    of the data. The analysis yielded valuable insights into the composition and differentiation of magma and rocks from the two regions. 
                    Future work should include a deeper analysis of the clusters and a determination of how geochemical plots relate to underlying geochemical processes.
                </p>
            </div>
        </div>

        <p className="mt-8 mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">Theoretical Framework</p>
        <Technologies data={tech} />

        <p className="mt-8 mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">Hawaii and the Pensinular Ranges Batholith (PRB)</p>

        <p className=" sm:text-lg text-gray-300 mb-4 mt-8">
            Hawaii and the PRB in Southern  California share some similar geological attributes. Both geological locations are the result of plate tectonic 
            forces and motion and are composed of rocks with a significant silica content. The rocks in both regions are sourced primarily from material in 
            the interior of the Earth, and are composed of similar elements and isotopes, making them good candidates for comparison.
        </p>

        <Table table={differences} boldFirst={false} />

        <p className=" sm:text-lg text-gray-300 mb-4 mt-8">
        However, there are also notable differences between Hawaii and the PRB. The above table provides an overview on some of the important 
        differences between Hawaii and the PRB in Southern California. The PRB was formed via subduction, where one tectonic plate moved under another. 
        In contrast, Hawaii was formed by a &quot;hot spot&quot; plume in the mantle that produced magma which subsequently erupted through the Pacific plate oceanic crust. 
        The PRB is made up of granitic types of rocks which have gone through several stages of melting and crystallization whereas the Hawaiian volcanoes are composed 
        of volcanic rocks which have mostly gone through only one stage of melting and crystallization. Additionally, the PRB includes a significant amount of 
        material from the crust, while Hawaiian volcanic rock comes mostly from material further down in the mantle. The higher silica PRB granitic rocks extend 
        from the Riverside area of California down the length of the Baja Peninsula in Mexico, though this analysis only concerns the northern PRB. The lower silica 
        Hawaiian volcanoes occur over the length of the island chain, although much of the data is from volcanoes on the Big Island at the end of the chain.
        </p>

        <p className="mt-8 mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">Results</p>

        <div className="flex flex-wrap gap-3 justify-center mt-8">
            <Table table={hawaiik3} boldFirst={true} />
            <Table table={prbk3} boldFirst={true} />
        </div>

        <p className="mt-8 mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">Conclusions</p>

        <p className=" sm:text-lg text-gray-300 mb-4">
            The geochemical interpretation of these plots was provided by one of the co-authors (BLC). Our analysis of rock geochemistry 
            from Hawaii and the PRB using PCA and K-Means provided valuable insights. For both regions, the first dimension of the PCA plots 
            correlated with the extent of mafic to felsic differentiation. The second dimension appears to distinguish tholeiitic from calc-alkaline 
            differentiation. Finally, dimension three may be related to the number of stages or cycles through which the primitive magma has progressed.
        </p>

        <p className="sm:text-lg text-gray-300 mb-4">
        For Hawaii, andesite was related to cluster one (red), dacite to cluster two (green), and basalt to cluster three (blue). In the PRB, 
        tonalite was related cluster one (red), gabbro to cluster two (green), and granite to cluster three (blue). By taking into account 
        Figure 1, Table 1, and Table 1, the following interpretation is possible:
        </p>

        <ul className="list-disc ml-8 sm:text-lg text-gray-300 mb-4">
            <li>
                In Hawaii, the volcanic sequence ranges from basalt to andesite to dacite. Dimension one values indicate the degree of differentiation, 
                with basalt having negative values, and the dacite having positive values. Dimension two values appear to display tholeiitic and calc-alkaline 
                differentiation trends, with the basalt displaying tholeiitic fractionation from Mg to Fe in olivine, and the dacite displaying calc-alkaline 
                fractionation from Ca to Na to K in feldspar. Ti was found to be important in this dimension. Dimension three values may indicate alkalinity and 
                &quot;feldspathoids&quot;, with both the alkaline basalt and dacite having negative values.
            </li>
            <li>
                In the PRB, the plutonic sequence ranges from gabbro to tonalite to granite. Dimension one values indicate the degree of differentiation, 
                with gabbro having negative values and granite having positive values. Dimension two values seem to distinguish the western PRB with &quot;tholeiitic basement&quot; 
                from the eastern PRB with &quot;calc-alkaline basement&quot;, with the western PRB having low values for Fe, Al, Na, and K, and the eastern PRB having high values. 
                Fe was observed as going from low to high to low again, and thus found to be important in this dimension. Dimension three values may distinguish the number 
                of melt/crystallization cycles, with the western PRB having perhaps two cycles, and the eastern PRB having more cycles. Na was found to be important in this dimension.
            </li>
        </ul>

        <p className="sm:text-lg text-gray-300 mb-4">
        At its core, machine learning is about finding patterns in complicated data sets. The use of machine learning in this work facilitated the discovery 
        of patterns in the data that could have been more difficult to discern with traditional methods used in large scale geochemical analysis. 
        Therefore, its use was beneficial in the comparison of Hawaii and the PRB.
        </p>

    </Template>
)

const differences = {
    title: 'Differences Between Hawaii and the PRB',
    headers: ['Hawaii', 'PRB'],
    data: [
        ['Mostly tholeiitic differntiation\n(Mg -> Fe)', 'Mostly calc-alkaline differentiation\n(Mg, Fe, Ca -> Na, K)'],
        ['Basaltic (higher in e.g.. Mg, Fe, Ti, Ca, Crr', 'Granitic (higher in e.g. K, Rb, Cs, Zr, U)'],
        ['Plume (mantle hotstop produced magma which erupted through the Pacific plate', 'Subduction (one tectonic plate moved under another generating intrusive and extrusive magma']
    ]
}

const tech = [
    {
        title: 'R',
        type: 'Language',
        content: 'R is a programming language and software environment for statistical computing and graphics. It is popular among statisticians and data scientists for data analysis and visualization. R provides a wide variety of statistical and graphical functions, including linear and nonlinear modeling, classical statistical tests, time-series analysis, classification, and clustering. R also includes packages that support data manipulation, data visualization, and machine learning. The R environment is highly extensible and allows users to easily add new functionality.',
        url: 'https://www.r-project.org/'
    },
    {
        title: 'Jupyter',
        type: 'Software',
        content: 'Jupyter is an open-source web-based interactive development environment (IDE) that allows users to create and share documents that contain live code, equations, visualizations, and narrative text. Jupyter supports multiple programming languages including Python, R, Julia, and others.',
        url: 'https://jupyter.org/'
    },
    {
        title: 'Principal Component Analysis (PCA)',
        type: 'Algorithm',
        content: 'PCA is an unsupervised machine learning technique used for analyzing large data sets containing a large number of features and reducing the dimensionality of the data set to its most significant components. This allows for better interpretability of multivariate data without compromising the amount of information originally contained.',
        url: 'https://en.wikipedia.org/wiki/Principal_component_analysis'
    },
    {
        title: 'K-Means Clustering',
        type: 'Algorithm',
        content: 'K-means is a popular unsupervised algorithm for clustering data points into k clusters, where k is a user-specified parameter. The algorithm starts by randomly selecting k initial centroids, and then iteratively assigns each data point to the cluster whose centroid is closest to it, based on a distance metric such as Euclidean distance. After each assignment, the centroid of each cluster is recalculated as the mean of all the data points assigned to that cluster. The process continues until the assignments no longer change or the maximum number of iterations is reached.',
        url: 'https://en.wikipedia.org/wiki/K-means_clustering'
    },
    {
        title: 'WebGL',
        type: 'Software',
        content: 'WebGL is a powerful JavaScript API which enables high-performance 3D graphics rendering inside web browsers. This API allows developers to create complex 3D graphics, animations, and interactive visualizations using JavaScript, HTML, and CSS. WebGL provides direct access to the GPU of the local device, allowing for hardware accelerated rendering of 3D scenes. This technology is used in various fields such as gaming, architecture, and scientific visualization to create 3D web-based applications which run seamlessly across multiple platforms and devices.',
        url: 'https://en.wikipedia.org/wiki/WebGL'
    },
    {
        title: 'IBM Data Science Methodology',
        type: 'Methodology',
        content: 'The Foundational Methodology for Data Science consists of ten stages designed to aid researchers in efficiently extracting insights from a given data set. It takes aspects from other methodologies accepted for data mining, but emphasizes several additional aspects including the use of very large data volumes and the automation of some processes.',
        url: 'https://tdwi.org/~/media/64511A895D86457E964174EDC5C4C7B1.PDF'
    }
]

const details = {
    title: 'Paper Details',
    journal: 'Earth Science Informatics',
    published: 'April 27, 2023',
    status: 'In Progress',
    authors: [
        'Miro I. Manestar, MS',
        'Germán H. Alférez, PhD',
        'Benjamin L. Clausen, PhD'
    ],
    institutions: [
        'Southern Adventist University',
        'Geoscience Research Institute'
    ],
    url: 'https://knowledge.e.southern.edu/mscs_reports/8/'
}

const hawaiik3 = {
    title: 'Hawaii Feature Cluster Average',
    subtitle: 'The averages were calculated using raw (unnormalized) data.',
    headers: ['Feature', 'Cluster 1 (Red)', 'Cluster 2 (Green)', 'Cluster 3 (Blue)'],
    data: [
        ['SiO2', '49.92', '54.24', '45.52'],
        ['TiO2', '2.64', '2.00', '1.96'],
        ['Al2O3', '13.78', '17.13', '10.05'],
        ['FeO', '11.42', '8.38', '11.93'],
        ['CaO', '10.60', '5.05', '9.10'],
        ['MgO', '7.30', '2.77', '16.97'],
        ['K2O', '0.54', '2.74', '0.46'],
        ['Na2O', '2.50', '5.44', '1.91']
    ]
}

const prbk3 = {
    title: 'PRB Feature Cluster Average',
    subtitle: 'The averages were calculated using raw (unnormalized) data.',
    headers: ['Feature', 'Cluster 1 (Red)', 'Cluster 2 (Green)', 'Cluster 3 (Blue)'],
    data: [
        ['SiO2', '64.06', '50.64', '72.07'],
        ['TiO2', '0.76', '0.92', '0.33'],
        ['Al2O3', '16.60', '18.62', '14.65'],
        ['FeO', '11.12', '7.94', '9.33'],
        ['CaO', '4.92', '10.69', '2.13'],
        ['MgO', '2.02', '6.13', '0.59'],
        ['K2O', '2.31', '0.47', '3.83'],
        ['Na2O', '3.56', '2.28', '3.62']
    ]
}

const Table = ({ table, boldFirst }) => (
    <div className="px-4 mt-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-white">{table.title}</h1>
          <p className="mt-2 text-sm text-gray-400">{table.subtitle}</p>
        </div>
      </div>
      <div className="mt-4 flow-root">
        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
          <div className="inline-block py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden ring-2 ring-gray-100 ring-opacity-5 rounded-lg">
              <table className="divide-y divide-gray-600">
                <thead className="bg-secondaryBg">
                  <tr>
                    {table.headers.map((h, i) => i !== 0 ? (
                        <th key={`${table.title}-${h}`} scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-highlight">{h}</th>
                    ) : (
                        <th key={`${table.title}-${h}`} scope="col" className="py-3.5 pl-4 pr-10 text-left text-sm font-semibold text-highlight sm:pl-4">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-600">
                  {table.data.map((d) => (
                    <tr key={d[0]}>
                      {d.map((val, i) => i !== 0 ? (
                        <td key={val} className="px-3 py-4 text-sm text-white">{val}</td>
                      ) : (
                        <td key={val} className={boldFirst ? 'py-4 pl-4 pr-3 text-sm font-bold text-white sm:pl-6' : 'px-3 pl-4 py-4 text-sm text-white'}>{val}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
)

export default HawaiiPRB