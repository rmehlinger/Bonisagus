from collections import defaultdict
import csv

__author__ = 'Richard'


def gen_v_f_constants(csv_file, output_file, obj_type):
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
                    o.write('{0} = {1}("{2}", {3}, "{4} [{5}]", "{6}", "{7}")\n'.format(
                        var_name + '_' + str(count), obj_type, row[0], row[1].upper(), row[2], count, row[3], row[4])
                    )

                    names.append('%s_%s,' % (var_name, count))
                else:
                    o.write('{0} = {1}("{2}", {3}, "{4}", "{5}", "{6}")\n'.format(
                        var_name, obj_type, row[0], row[1].upper(), row[2], row[3], row[4])
                    )

                    names.append('%s,' % var_name)
        o.write('\n%sS = [\n    ' % obj_type.upper() + '\n    '.join(sorted(names)) + '\n]')

def gen_ability_constants(csv_file, output_file):
    names = []

    with open(output_file, 'w') as o:
        with open(csv_file, newline='') as f:
            reader = csv.reader(f)
            for row in reader:
                var_name = ''.join(c for c in row[1].upper().strip(' ').replace(' ', '_') if c.isalnum() or c == '_')
                o.write('{0} = Ability("{1}", "{2}", {3}, {4}, {5}, {6})\n'.format(
                    var_name, row[0], row[1], row[2], row[3], row[4], ', '.join(['"%s"' % cell.replace(r'"', r'\"') for cell in row[4:] if cell]))
                )

                names.append('%s,' % var_name)

        o.write('\nABILITIES = [\n    ' + '\n    '.join(names) + '\n]')