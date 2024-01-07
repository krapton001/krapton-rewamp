const schema = {
    id: 'string',
    title: 'string',
    description: 'string',
    experienceLevel: 'string', //1-2 years
    jobType: 'string', // part time, full time, contract
    location: 'string', // on site, remote, hybrid
    rolesAndResponsiblities: 'string[]',
    requiredSkills: 'string[]',
    status: 'string', // opened closed
};

const applySchema = {
    name: 'string',
    email: 'string',
    linkedInUrl: 'string',
    appliedFor: 'string - id of opened job',
    resumeUrl: 'string',
};

// create, readAll, delete
