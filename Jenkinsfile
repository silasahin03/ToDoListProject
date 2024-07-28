pipeline {
    agent any
    
    tools{nodejs "Node"}

    environment {
        GITHUB_REPO = 'https://github.com/silasahin03/ToDoListProject.git'
        EMAIL_RECIPIENTS = 'silasahin2303@gmail.com'
    }

    stages {
        stage('Checkout') {
            steps {
                git url: "${env.GITHUB_REPO}", branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                }
                dir('api') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Projects') {
            steps {
                dir('frontend') {
                    sh 'npm run build'
                }
                dir('api') {
                    sh 'npm run build'
                }
            }
        }

        stage('Run Tests') {
            steps {
                // Run tests
                dir('frontend') {
                    sh 'npm test'
                }
                dir('api') {
                    sh 'npm test'
                }
            }
        }

        stage('Build Docker Compose') {
            steps {
                script {
                    sh 'docker-compose build'
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                script {
                    sh 'docker-compose up -d'
                }
                 script {
                    sh 'docker-compose down'
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
        success {
            mail to: "${env.EMAIL_RECIPIENTS}",
                 subject: "Deployment Successful: ${currentBuild.fullDisplayName}",
                 body: "The deployment of ${env.JOB_NAME} #${env.BUILD_NUMBER} was successful."
        }
        failure {
            mail to: "${env.EMAIL_RECIPIENTS}",
                 subject: "Deployment Failed: ${currentBuild.fullDisplayName}",
                 body: "The deployment of ${env.JOB_NAME} #${env.BUILD_NUMBER} has failed."
        }
    }
}