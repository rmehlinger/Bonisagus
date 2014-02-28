from collections import defaultdict
import csv

__author__ = 'Richard'


def gen_constants(csv_file, output_file, obj_type):
    names = []
    counts = defaultdict(lambda: 0)
    with open(output_file, 'w') as o:
        with open(csv_file, newline='') as f:
            reader = csv.reader(f)
            for row in reader:
                var_name = ''.join(c for c in row[2].upper().strip(' ').replace(' ', '_') if c.isalnum() or c == '_')

                counts[var_name] += 1
                count = counts[var_name]

                if count > 1:
                    o.write('{0} = {1}("{2}", {3}, "{4}({5})", "{6}", "{7}")\n'.format(var_name + '_' + str(count),
                                                                                      obj_type, row[0], row[1].upper(),
                                                                                      row[2], count, row[3], row[4]))

                    names.append('%s_%s,' % (var_name, count))
                else:
                    o.write('{0} = {1}("{2}", {3}, "{4}", "{5}", "{6}")\n'.format(var_name, obj_type, row[0],
                                                                                  row[1].upper(), row[2], row[3],
                                                                                  row[4]))

                    names.append('%s,' % var_name)
        o.write('\n%sS = [\n    ' % obj_type.upper() + '\n    '.join(sorted(names)) + '\n]' )