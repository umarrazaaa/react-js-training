// import './App.css';
// import { ReactQueryDevtools } from 'react-query/devtools';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { HomePage } from './components/Home.page';
// import { RQSuperHeroesPage } from './components/RQSuperHeroes.page';
// import { RQSuperHeroPage } from './components/RQSuperHero.page';
// import { SuperHeroesPage } from './components/SuperHeroes.page';
// import { ParallelQueriesPage } from './components/ParallelQueries.page';
// import { DynamicParallelPage } from './components/DynamicParallel.page';
// import { DependentQueriesPage } from './components/DependentQueries.page';
// import { PaginatedQueriesPage } from './components/PaginatedQueries.page';
// import { InfiniteQueriesPage } from './components/InfiniteQueries.page';
// import { QueryClientProvider, QueryClient } from 'react-query';

// const queryClient = new QueryClient();


// function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/super-heroes">Traditional Super Heroes</Link>
//             </li>
//             <li>
//               <Link to="/rq-super-heroes">RQ Super Heroes</Link>
//             </li>
//             <li>
//               <Link to="/rq-infinite">RQ Infinite Query Load More</Link>
//             </li>
//           </ul>
//         </nav>
//         <Routes>
//           <Route path="/" element={<HomePage />}></Route>

//           <Route path="/super-heroes" element={<SuperHeroesPage />}></Route>

//           <Route
//             path="/rq-super-heroes"
//             element={<RQSuperHeroesPage />}
//           ></Route>
//           <Route
//             path="/rq-super-heroes/:heroId"
//             element={<RQSuperHeroPage />}
//           ></Route>
//           <Route
//             path="/rq-parallel"
//             element={< ParallelQueriesPage/>}
//           ></Route>
//           <Route
//             path="/rq-dynamic-parallel"
//             element={< DynamicParallelPage heroId={[1,3]}/>}
//           ></Route>
//           <Route
//             path="/rq-dependent"
//             element={<DependentQueriesPage email="muhammadislam@example.com"/>}
//           ></Route>
//           <Route
//             path="/rq-paginated"
//             element={<PaginatedQueriesPage/>}
//           ></Route>
//           <Route
//             path="/rq-infinite"
//             element={<InfiniteQueriesPage/>}
//           ></Route>
//         </Routes>
//       </div>
//     </Router>
//     <ReactQueryDevtools inittialIsOpen={false}/>
//     </QueryClientProvider>
//   );
// }

// export default App;
