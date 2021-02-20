const UpdateCommands = new mongoose.Schema({
  	project_id: {
    	type: String,
  	},
  	ip_address: {
    	type: String
  	},
  	location: {
    	type: String
  	},
  	node_version: {
    	type: String
  	},
  	npm_version: {
    	type: String
  	},
  	cli_version: {
    	type: String
  	},
  	desktop_session: {
    	type: String
  	},
  	os_username: {
    	type: String
  	},
  	os_type: {
    	type: String
  	},
  	os_release: {
    	type: String
  	},
  	os_platform: {
    	type: String
  	},
    os_hostname: {
      type: String
    },
  	os_arch: {
    	type: String
  	},
  	os_cpu_model: {
    	type: String
  	},
  	total_memory: {
    	type: String
  	},
  	created_at: {
    	type: String
  	},
  	updated_at: {
    	type: String
  	}
})

const UpdateCommand = mongoose.model("update_commands", UpdateCommands);


module.exports = UpdateCommand;