import { useState } from 'react';

type Job = {
  id: number;
  title: string;
  status: boolean;
};

export default function List() {
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: 1,
      title: 'học reactjs hook',
      status: false,
    },
    {
      id: 2,
      title: 'Code',
      status: false,
    },
  ]);
  const [taskName, setTaskName] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskName === '') {
      alert('Ko duoc de trong');
      return;
    }
    const isExist = jobs.some((item) => item.title === taskName);
    if (isExist) {
      alert('Noi dung da ton tai');
      return;
    }
    const newJob: Job = {
      id: new Date().getTime(),
      title: taskName,
      status: false,
    };
    setJobs([...jobs, newJob]);
    setTaskName('');
  };
  const handleDelete = (idDelete: number) => {
    const result = confirm('Ban co chac muon xoa khong');
    if (result) {
      setJobs(jobs.filter((item) => item.id !== idDelete));
    }
  };
  const toggleStatus = (id: number) => {
    setJobs(
      jobs.map((job) =>
        job.id === id ? { ...job, status: !job.status } : job
      )
    );
  };
  function countCompletedJobs() {
  return jobs.filter(job => job.status).length;
}

  return (
    <div>
      <h3>Danh sach cong viec</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" id="form2" value={taskName} onChange={handleChange}/>
        <button>Them</button>
      </form>
      <div>
        <ul>
          {jobs.map((item) => {
            return (
              <li key={item.id} >
                <div>
                  <input type="checkbox" checked={item.status} onChange={() => toggleStatus(item.id)}/>
                  {item.status ? (
                    <span style={{ textDecoration: 'line-through' }}>{item.title}</span>
                  ) : (
                    <span>{item.title}</span>
                  )}
                  <button>Sua</button>
                  <button onClick={() => handleDelete(item.id)}>Xoa</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <p>Cong viec da hoan thanh: {countCompletedJobs()} / {jobs.length}</p>
    </div>
  );
}