import Header from "../components/Header/Header";
// import Navbar from "../Navbar/Navbar";
import styles from "./App.module.css";
// import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <div className={styles.appWrapper}>
        <Header />
        {/* <Navbar
            isAuth={this.props.isAuth}
            burgerMenuStatus={this.props.burgerMenuStatus}
            switchBurgerMenuStatus={this.props.switchBurgerMenuStatus}
          /> */}
        {/* <div className={styles.appWrapperContent}>
            <Suspense fallback={<Preloader />}>
              <Routes>
                <Route
                  path="/profile/:userId?"
                  element={
                    <Suspense fallback={<Preloader />}>
                      <ProfileContainer store={this.props.store} />
                    </Suspense>
                  }
                />
                <Route
                  path="/dialogs/:userId?"
                  element={
                    <Suspense fallback={<Preloader />}>
                      <DialogsContainer store={this.props.store} />
                    </Suspense>
                  }
                />
                <Route
                  path="/users/*"
                  element={
                    <Suspense fallback={<Preloader />}>
                      <UsersContainer />
                    </Suspense>
                  }
                />
                <Route
                  path="/friends"
                  element={
                    <Suspense fallback={<Preloader />}>
                      <FriendsContainer />
                    </Suspense>
                  }
                />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Page404 />} />
                <Route
                  path="/"
                  element={<FirstPage isAuth={this.props.isAuth} />}
                />
              </Routes>
            </Suspense>
          </div> */}
      </div>
    </>
  );
}

export default App;
