import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

export default {
    entry: 'entry.js',
    dest: 'bundle.js',
    plugins: [
        serve(), // index.html should be in root of project
        livereload({
            watch: 'dist',
            verbose: false, // Disable console output

            // other livereload options
            port: 3100,
            // delay: 300,
            // https: {
            //     key: fs.readFileSync('keys/agent2-key.pem'),
            //     cert: fs.readFileSync('keys/agent2-cert.pem')
            // }
        }),
    ],
}
