pipeline {
    // master executor should be set to 0
    agent any
    stages {
        stage('Build Image') {
            steps {
                //sh
                bat "docker build -t wdio_asos . "
            }
        }
        stage('Push Image') {
            steps {
			        bat "docker push amitbhabra/wdio_asos:latest"
			    }                           
            }
        }
    }