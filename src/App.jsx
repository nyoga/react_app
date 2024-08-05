import React from 'react';
import {
  Route, 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import Homepage from './pages/Homepage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import Jobpage, {jobLoader} from './pages/Jobpage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';



const App = () => {
  const addJob = async (newJob) => {
    //Add new Job
    const res =await fetch('/api/job', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });
    return;
  };

  //Delete jOb
  const deleteJob =async (id) => {
    const res =await fetch(`/api/job/${id}`, {
      method: 'DELETE',
    });
    return;
  };
  // Update Job
  const updatedJob = async(job) => {
    const res =await fetch(`/api/job/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    });
    return;
  }

  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>} /> 
        <Route 
        path='/jobs/:id' 
        element={<Jobpage deleteJob={ deleteJob}/>}  
        loader={jobLoader} />
        <Route path='*' element={<NotFoundPage />} /> 
        <Route 
        path='/edit-job/:id' 
        element={<EditJobPage updatedJobSubmit={updateJob} />}  
        loader={jobLoader} />
  
      </Route>
    )
  );
  return <RouterProvider router={router}/>
}

export default App
