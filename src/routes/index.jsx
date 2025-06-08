import { Routes, Route } from "react-router-dom";
import App from "../App";
import Home from "../pages/main/home";
import NoteFound from "../pages/main/noteFound";

const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      {/* <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} /> */}

      {/* <Route path='single-portfolio/:id' element={<SinglePortfolio />} /> */}

      {/* <Route path='admin-panel' element={<AdminPanel />}>
        //* certificates
        <Route path='main-category' element={<MainCategory />} />
        <Route path='slug' element={<Slug />} />
        <Route path='accessory-category' element={<AccessoryCategory />} />
        <Route path='all-users-details' element={<AllUsers />} />
        <Route path='exam' element={<Exam />} />
        <Route path='coins' element={<AllCoins />} />
        <Route path='purchases' element={<AllPurchases />} /> */}
      {/* <Route path='add-certificate' element={<AddCertificate />} />
          <Route path='edit-certificate' element={<EditCertificate />} /> */}
      {/*  //*portfolios
          <Route path='portfolios' element={<IndexPortfolios />} />
          <Route path='add-portfolio' element={<AddPortfolios />} />
          <Route path='edit-portfolio' element={<EditPortfolios />} />
          //*publications
          <Route path='publications' element={<IndexPublication />} />
          <Route path='add-publication' element={<AddPublication />} />
          <Route path='edit-publication' element={<EditPublication />} /> */}
      {/* </Route> */}

      <Route path='*' element={<NoteFound />} />
    </Route>
  </Routes>
);

export default AppRoutes;
