pipeline {
    // master executor should be set to 0
    agent any
    stages {
        stage('Build Image') {
            steps {
                //sh
                bat "docker build -t amitbhabra/wdio_asos:latest . "
            }
        }
        stage('Push Image') {
            steps {
			        bat "docker push amitbhabra/wdio_asos:latest"
			    }                           
            }
        
        stage('Get the Latest Image') {
            steps {
			        bat "docker pull amitbhabra/wdio_asos:latest"
			    }                           
            }

        stage('Build infrastructure - Grid and Nodes') {
            steps {
                    bat "docker-compose down"
			        bat "docker-compose up -d"
			    }                           
            }   
        
        stage('Test with latest build') {
            steps {
			        bat "npm run testSeleniumGrid"
			    }                           
            }

        stage('Tear Off Infra') {
            steps {
			        bat "docker-compose down"
			    }                           
            }
        }
    }